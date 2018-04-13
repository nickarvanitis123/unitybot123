const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame("with TryHard");
});

client.on('message', message => {
    if (message.content === '!ip') {
        message.channel.sendMessage('🔻**IP: UnityPvP.us**');
      }
client.on('message', message => {
    if (message.content === '!store') {
        message.channel.sendMessage('🔻**Store: UnityPvP.buycraft.net**');
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
