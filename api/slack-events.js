const { WebClient } = require('@slack/web-api');
const { verifySlackSignature, getRawBody } = require('../lib/verifySlack');
const { DEAL_CHANNEL_TEMPLATE } = require('../lib/dealTemplate');
const { CAH_DEAL_CHANNEL_TEMPLATE } = require('../lib/cahDealTemplate');

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

// Channels are matched by name prefix, e.g. "#deal-acme-corp" -> "deal-acme-corp".
// Slack channel names never contain "#" themselves - that's only the display prefix.
const CHANNEL_PREFIX = 'deal-';
// More specific sub-prefixes get the CAH template instead of the general one.
const CAH_PREFIXES = ['deal-pac', 'deal-cah'];

function templateForChannel(name) {
  if (CAH_PREFIXES.some((prefix) => name.startsWith(prefix))) {
    return CAH_DEAL_CHANNEL_TEMPLATE;
  }
  if (name.startsWith(CHANNEL_PREFIX)) {
    return DEAL_CHANNEL_TEMPLATE;
  }
  return null;
}

async function attachDealCanvas(channel) {
  const name = channel.name || '';
  const markdown = templateForChannel(name);
  if (!markdown) return;

  try {
    await slack.conversations.join({ channel: channel.id });
  } catch (err) {
    // already_in_channel is fine; anything else means we likely can't
    // proceed (e.g. a private channel we weren't invited to).
    if (err?.data?.error !== 'already_in_channel') {
      console.error(`Failed to join #${name} (${channel.id}):`, err?.data?.error || err);
      throw err;
    }
  }

  try {
    const result = await slack.conversations.canvases.create({
      channel_id: channel.id,
      document_content: {
        type: 'markdown',
        markdown,
      },
    });
    console.log(`Created canvas ${result.canvas_id} for #${name} (${channel.id})`);
  } catch (err) {
    const slackError = err?.data?.error;

    // Slack retries event delivery; if a canvas already exists this is a
    // no-op rather than a real failure.
    if (slackError === 'channel_canvas_already_exists') {
      console.log(`Canvas already exists for #${name} (${channel.id}), skipping.`);
      return;
    }

    console.error(`Failed to create canvas for #${name} (${channel.id}):`, slackError || err);
    throw err;
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }

  const rawBody = await getRawBody(req);

  if (!verifySlackSignature(req, rawBody)) {
    res.status(401).send('Invalid signature');
    return;
  }

  const payload = JSON.parse(rawBody);

  // One-time handshake when you first point the Events API at this URL.
  if (payload.type === 'url_verification') {
    res.status(200).json({ challenge: payload.challenge });
    return;
  }

  console.log(
    'Received payload.type=%s event.type=%s channel=%o',
    payload.type,
    payload.event?.type,
    payload.event?.channel
  );

  if (payload.type === 'event_callback' && payload.event?.type === 'channel_created') {
    try {
      await attachDealCanvas(payload.event.channel);
    } catch (err) {
      // Still ack with 200 so Slack doesn't hammer retries for an error
      // we've already logged; the channel can be fixed up manually if needed.
      console.error('Unhandled error while attaching canvas:', err);
    }
    res.status(200).send('ok');
    return;
  }

  // Any other event type: ack and ignore.
  res.status(200).send('ok');
};
