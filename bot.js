const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ip') {
    	message.channel.sendMessege('✅ IP: UnityPvP.us');
  	}
});

client.on('message', message => {
    if (message.content === '!store') {
    	message.channel.sendMessege('✅ Store: unitypvp.buycraft.net');
  	}
});

client.on('message', message => {
    if (message.content === '!info') {
    	message.channel.sendMessege('✅ Coming Soon!');
  	}
});

client.on('message', message => {
    if (message.content === '!bot') {
    	message.channel.sendMessege('✅ Coded by TryHard#3061');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
