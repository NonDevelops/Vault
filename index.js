const Discord = require("discord.js")
const command = require('./command.js')
const config = require('./config.json')
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_BANS",
    "DIRECT_MESSAGES"
  ]
})



client.login(process.env.TOKEN)

client.on('ready', () => {
  console.log('Vault (VERSION 0.2)')

command(client, 'ban', message => {
  const { member, mentions } = message
  const tag = `<@${member.id}>`

  if (
    member.permissions.has('ADMINISTRATOR') ||
    member.permissions.has('BAN_MEMBER')
  ) {
    const target = mentions.users.first()
    if (target) {
      const targetMember =  message.guild.members.cache.get(target.id)
      targetMember.ban()
      message.channel.send(`${tag} That user has been banned.`)

    } else {
      message.channel.send(`${tag} Please specify someone to ban.`)
    }

  } else {
    message.channel.send(
        `<@${tag}> You do not have permission to use this command.`
    )
  }
 })
})

client.on('ready', () => {
  console.log('Bot made by NonExistent')
  command(client, 'kick', message => {
  const { member, mentions } = message

  const tag = `<@${member.id}>`

  if (
    member.permissions.has('ADMINISTRATOR') ||
    member.permissions.has('KICK_MEMBER')
  ) {
    const target = mentions.users.first()
    if (target) {
      const targetMember =  message.guild.members.cache.get(target.id)
      targetMember.kick()
      message.channel.send(`${tag} That user has been kicked.`)

    } else {
      message.channel.send(`${tag} Please specify someone to kick.`)
    }

  } else {
    message.channel.send(
        `<@${tag}> You do not have permission to use this command.`
    )
  }
 })
})

client.on('ready', () => {
  console.log(' ')
  command(client, 'ping', message => {
  const { member, mentions } = message
  const tag = `<@${member.id}>`
message.channel.send(`${tag} 🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  })
})


client.on('ready', () => {
  console.log('')
  command(client, 'help', message => {
    const { member, mentions } = message
    const tag = `<@${member.id}>`
    message.channel.send("")
  })
})
