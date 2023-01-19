import requests

import logging
import os
# Import WebClient from Python SDK (github.com/slackapi/python-slack-sdk)
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError

# WebClient instantiates a client that can call API methods
# When using Bolt, you can use either `app.client` or the `client` passed to listeners.
token=os.environ.get("SLACK_BOT_TOKEN")
if not token:
    raise RuntimeError("SLACK_BOT_TOKEN env var is not set!")
print("env good!")
client = WebClient()
logger = logging.getLogger(__name__)

# ID of channel you want to post message to
channel_id = "C020XUK58T1"

try:
    # Call the conversations.list method using the WebClient
    result = client.chat_postMessage(
        channel=channel_id,
        text="Pull Request"
        # You could also use a blocks[] array to send richer content
    )
    # Print result, which includes information about the message (like TS)
    print(result)

except SlackApiError as e:
    print(f"Error: {e}")
# C020XUK58T1