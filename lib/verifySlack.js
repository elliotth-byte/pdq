const crypto = require('crypto');

/**
 * Verifies the `X-Slack-Signature` header per Slack's signing-secret scheme.
 * https://docs.slack.dev/authentication/verifying-requests-from-slack
 */
function verifySlackSignature(req, rawBody) {
  const timestamp = req.headers['x-slack-request-timestamp'];
  const signature = req.headers['x-slack-signature'];
  const signingSecret = process.env.SLACK_SIGNING_SECRET;

  if (!timestamp || !signature || !signingSecret) return false;

  // Reject requests older than 5 minutes to guard against replay attacks.
  const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 60 * 5;
  if (Number(timestamp) < fiveMinutesAgo) return false;

  const baseString = `v0:${timestamp}:${rawBody}`;
  const expectedSignature =
    'v0=' +
    crypto.createHmac('sha256', signingSecret).update(baseString, 'utf8').digest('hex');

  const expected = Buffer.from(expectedSignature, 'utf8');
  const actual = Buffer.from(signature, 'utf8');

  if (expected.length !== actual.length) return false;
  return crypto.timingSafeEqual(expected, actual);
}

/** Reads the raw request body (needed for signature verification). */
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

module.exports = { verifySlackSignature, getRawBody };
