const client = new Discord.Client({disableEveryone: false});

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(message.author.toString() + " Desculpe, apenas administradores podem usar esse comando");
    const msg = args.join(" ");

    if(!msg) return message.reply("use assim: `!say <msg>`")
    message.delete().catch();
    return message.channel.send(msg);
  }
