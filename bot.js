const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
   if (message.content === '!store') {
   	  message.reply('🔺**Store: UnityPvP.buycraft.net**');
   }
    
   if (message.content === '!ip') {
      message.reply('🔺**IP: unitypvp.us**');
   }
    
   if (message.content === '!bot') {
      message.reply('🔺**Coded By @TryHard#3061**');
   }
    
   if (message.content === '!test5') {
      message.reply('🔺**Hey, Welcome to the Server!**');
   }
    
   if (message.content === '!test4') {
      message.reply('🔺**Hey, Welcome to the Server!**');
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
