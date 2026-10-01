# deal-canvas-bot

Watches for new Slack channels named `deal-*` and attaches a copy of the
**PDQ Template** canvas to them automatically, using Slack's Events API and
a Vercel serverless function.

## How it works

1. Slack sends a `channel_created` event to `/api/slack-events` every time
   a channel is made.
2. The function verifies the request came from Slack (signing secret).
3. If the new channel's name starts with `deal-`, it calls
   `conversations.canvases.create` to tab a populated canvas into that
   channel, choosing the template by prefix:
   - `deal-pac*` or `deal-cah*` -> **CAH PDQ Tracker** (`lib/cahDealTemplate.js`)
   - any other `deal-*` -> **PDQ Template** (`lib/dealTemplate.js`)
4. If a canvas somehow already exists for that channel (e.g. a Slack
   retry), it's a no-op rather than an error.

Note: Slack channel names never include the `#` - that's just the display
prefix. A channel created as "#deal-acme-corp" has the name `deal-acme-corp`,
which is what the prefix check matches against.

## 1. Create the Slack app

Go to https://api.slack.com/apps -> **Create New App** -> **From scratch**.

**OAuth & Permissions -> Bot Token Scopes**, add:
- `channels:read` - lets the app see new public channels and their names
- `canvases:write` - lets the app create the canvas

If deal channels are ever created as **private** channels, also add
`groups:read` and note that the bot must be invited into the channel before
it can attach a canvas to it (Slack requires app membership for private
channels; public channels don't have this restriction).

Install the app to your workspace, then copy the **Bot User OAuth Token**
(`xoxb-...`) - you'll need it below.

**Basic Information -> App Credentials**: copy the **Signing Secret**.

## 2. Deploy to Vercel

```bash
cd deal-canvas-bot
npm install
vercel
```

Once deployed, set the environment variables in the Vercel project
(**Settings -> Environment Variables**), then redeploy:

- `SLACK_BOT_TOKEN` - the `xoxb-...` token from step 1
- `SLACK_SIGNING_SECRET` - the signing secret from step 1

## 3. Point Slack at your deployed URL

Back in your Slack app settings, **Event Subscriptions**:

1. Toggle it on.
2. Request URL: `https://<your-vercel-domain>/api/slack-events`
   Slack will immediately send a verification challenge - the function
   handles this automatically, so you should see a green "Verified" check.
3. Under **Subscribe to bot events**, add `channel_created`.
4. Save changes and reinstall the app if prompted (new scopes/events
   require reinstalling).

## 4. Test it

Create a channel named `deal-test-123` in the workspace. Within a few
seconds it should get a canvas tab populated with the PDQ Template content.
Check the Vercel function logs if it doesn't show up.

## Updating the templates

- General PDQ template: `lib/dealTemplate.js`
- CAH PDQ template (`deal-pac*` / `deal-cah*`): `lib/cahDealTemplate.js`

If either source canvas changes, copy its latest markdown into the
corresponding file and redeploy.
