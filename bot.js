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
    
   if (message.content === 'Hi') {
      message.reply('🔺**Hey, Welcome to the Server!**');
   }
   
   if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
     if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
       return message.reply("Sorry, you don't have permissions to use this!");
    
     let member = message.mentions.members.first();
     if(!member)
       return message.reply("Please mention a valid member of this server");
     if(!member.bannable) 
       return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

     let reason = args.slice(1).join(' ');
     if(!reason) reason = "No reason provided";
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
