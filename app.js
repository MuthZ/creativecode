const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('message', message => {
  if (message.author.bot) return
  if (!message.content.startsWith(config.prefix)) return
  let command = message.content.split(' ')[0]
  command = command.slice(config.prefix.length)
  let args = message.content.split(' ').slice(1)
  try {
    let commandFile = require(`./comandos/${command}.js`)
    commandFile.run(client, message, args)
  } catch (err) {
    console.error(err)
  }

  client.on('ready', () => {
    console.log(`Bot iniciado com sucesso!`)
  })
})
client.login(process.env.TokenBOT)
