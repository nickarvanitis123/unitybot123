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
    if (message.content === '!help') {
        message.channel.sendMessage('  **Help Panel**
Public-Commands:
!help | Shows Bot's Help page.
!ip | Shows the Server's IP.
!store | Shows the Server's Store.
UnityPvP Bot v1.3.0');
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
