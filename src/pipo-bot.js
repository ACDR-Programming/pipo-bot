const tmi = require('tmi.js');
const dotenv = require('dotenv');

dotenv.config(); //dotenv initialize


// Define configuration options
const opts = {
  connection: {
		reconnect: true,
		secure: true
	},
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [process.env.CHANNEL_NAME]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('connected', onConnectedHandler);
client.on('message', onMessageHandler);
// client.on('join', onJoinHandler);
client.on("chat", onChatHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, ctx, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim().toLowerCase();

  // If the command is known, let's execute it
  if (commandName === '!piponojutsu') {
    client.say(target, `${ ctx.username } ha invocado al poderosísimo ¡Pipo!`)
  }

  if (commandName === '!caricia') {
    client.say(target, `${ ctx.username } ha acariciado a Pipo`)
  }

  if (commandName === '!abrazo') {
    client.say(target, `${ ctx.username } le dio un abrazo a todos los espectadores`)
  }

  if (commandName === '!patada') {
    client.say(target, `${ ctx.username } a matado a Pipo de una patada`)
  }

  if (commandName === '!tacos') {
    client.say(target, 'Tacos tacos!! pasele mientras ve el stream, compre sus tacos!!')
  }
}
function onChatHandler(target, ctx, msg, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Remove whitespace from chat message
    const message = msg.trim().toLowerCase();

    //Greetings
    if (message === 'hola') {
      client.say(target, `${ctx.username} bienvenido al stream de Pipo`)
    }
}

// function onJoinHandler(target, usrname, self) {
//   if (self) { return; } // Ignore messages from the bot
  
//   //Thank you message for following the channel
//   client.say(target, `Gracias por seguirnos ${usrname}, bienvenido a la familia`);
// }

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
