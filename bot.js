const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame("with TryHard");
});

client.on('message', message => {
    if (message.content === '!ip') {
        message.channel.sendMessage('🔻**IP: UnityPvP.us**');

    if (message.content === '!ip'`){
        message.channel.sendMessage('🔻**IP: UnityPvP.us**');
       
      let botembed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#ff0000")
      .addField("Bot Name", bot.user.username);
      
      return message.channel.send(botembed);
     }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
