const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

var hoje = new Date();
            var dd = hoje.getDate();
            var mm = hoje.getMonth()+1;
            var hh = hoje.getHours()-3;
            var min = hoje.getMinutes();
            var ss = hoje.getSeconds();
            var yyyy = hoje.getFullYear();
            if(dd<10){
                dd = '0'+dd;
            }
            if (mm<10) {
                mm = '0'+mm;
            }
            if (hh<10){
		if(hh<01){
		    hh = 3+hh;
		}
                hh = '0'+hh;
            }
            if (min<10){
                min = '0'+min;
            }
            var hoje = dd+ '/' +mm+ '/' +yyyy + ' às ' + hh + ':' + min;
	    var hojee = dd+ '/' +mm+ '/' +yyyy;

var prefix = "!";

;

client.on("message", message => { 
  	if(message.author.bot) return;
  	if(!message.content.startsWith(config.prefix)) return;
 
  	let command = message.content.split(" ")[0];
  	command = command.slice(config.prefix.length);
 
	let args = message.content.split(" ").slice(1);
 
  	try {
    		let commandFile = require(`./comandos/${command}.js`);
    		commandFile.run(client, message, args);
  	} catch (err) {
    		console.error(err);
  	}
 
});

client.on("ready", () => {
    console.log(`\nBot iniciado com sucesso!`); 
});


client.on("guildMemberAdd", member => { // MSG DE BEM-VINDO
	 const entrou = new Discord.RichEmbed()
              .setTitle(`Bem-vindo(a)`)
              .setDescription(`**__${member.user.username}__** entrou no servidor.`)
              .setThumbnail(member.user.avatarURL)
              .setColor("#faaf05")
              .setTimestamp()

         //let role = member.guild.roles.get("430495434172137502")

         member.addRole('486556508776300555') 
         member.guild.channels.get("480833249635991572").send(entrou)
});

client.on("guildMemberRemove", member => { // MSG DE SAIDA
	 const saiu = new Discord.RichEmbed()
              .setTitle(`Tchau`)
              .setDescription(`**__${member.user.username}__** saiu do servidor.`)
              .setThumbnail(member.user.avatarURL)
              .setTimestamp()

         //let role = member.guild.roles.get("430495434172137502")

         member.guild.channels.get("480833249635991572").send(saiu)
});

client.on('message', message =>{
	if(message.content.startsWith("nerd dlc")) {
		message.channel.send(`Sim, verdade. :D`)
	}
  	if(message.content.includes("https://discord.gg/")){
      		message.delete()
    		message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  	}
	
	  	if(message.content.includes("https://discord.gg/")){
      		message.delete()
    		message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  	}
	
});
client.on('message', message =>{
  	if(message.content.includes("https://discord.me/")){
      		message.delete()
    		message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  	}
});

client.login(process.env.TokenBOT);
