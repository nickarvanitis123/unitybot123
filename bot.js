const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
   if (message.content === '!shop') {
   	  message.reply(':cyclone: **https://selly.gg/u/CountingAlts**');
   }
    
   if (message.content === '!coupon') {
      message.reply(':cyclone: **10%OFF: 1snj9vxadoc**');
   }
    
   if (message.content === '!bot') {
      message.reply('🔺**Coded By @TryHard#3061**');
   }
    
   if (message.content === '!ping') {
      message.message(':cyclone: **testy**');
   }
    
   if (message.content === '!roast') {
      message.reply(':cyclone: **I want to call you a douche, but that would be unfair and unrealistic. Douches are often found near vaginas.**');
   }
    
   if (message.content === '!test3') {
      message.sendMessage('🔺**Hey, Welcome to the Server!**');
   }
    
   if (message.content === '!test2') {
      message.reply('🔺**Hey, Welcome to the Server!**');
  }




  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }
    
   if (message.content === '!test') {
      message.reply('🔺**Hey, Welcome to the Server!**');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
