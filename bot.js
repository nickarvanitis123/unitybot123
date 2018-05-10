const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
   if (message.content === '!store') {
   	  message.reply('🔺**Store: UnityPvPStore.ga**');
   }
    
   if (message.content === '!ip') {
      message.reply('🔺**IP: play.unitypvp.us**');
   }
    
   if (message.content === '!bot') {
      message.reply('🔺**Coded By @TryHard#3061**');
   }
    
   if (message.content === '!twitter') {
      message.reply('🔺**https://twitter.com/OFUnityPvP**');
   }
    
   if (message.content === '!website') {
      message.reply('🔺**unitypvp.club**');
   }
    
   if (message.content === '!test3') {
      message.reply('🔺**Hey, Welcome to the Server!**');
   }
    
   if (message.content === '!test2') {
      message.reply('🔺**Hey, Welcome to the Server!**');
   }
    
   if (message.content === '!test1') {
      message.reply('🔺**Hey, Welcome to the Server!**');
   }
    
   if (message.content === '!test') {
      message.reply('🔺**Hey, Welcome to the Server!**');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
