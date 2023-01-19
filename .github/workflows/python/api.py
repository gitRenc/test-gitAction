import os
import requests

import logging


# PUT TOKEN ON GITHUB SECERETS
token = os.environ.get("SLACK_BOT_TOKEN")
if not token:
    raise RuntimeError("SLACK_BOT_TOKEN env var is not set!")
print("env pass!")

# ID of channel you want to post message to
url = "https://slack.com/api/chat.postMessage"
headers = {"Authorization": "Bearer {}".format(
    token), "Content-type": "application/json"}
channel_id = "C020XUK58T1"
data = {
    "channel": "C020XUK58T1",
    "text": "Hello world :tada:"
}


try:
    response = requests.post(url, headers=headers, json=data)
    # Call the conversations.list method using the WebClient

    # Print result, which includes information about the message (like TS)
    print(response)
except:
    print("api call failed")

# C020XUK58T1
