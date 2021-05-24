# Pipo bot
---
Basic bot of twitch, this bot was made using [tmi.js](https://tmijs.com/).

To start using it we first have to create an environment variables file (.env) and enter the following variables.

* BOT_USERNAME="Bot name"
* 0AUTH_TOKEN="Token of the channel that will represent the bot"
* CHANNEL_NAME="Name of the channel where the bot will operate"

To add commands we must put the corresponding statement inside the function "onMessageHandler". 
