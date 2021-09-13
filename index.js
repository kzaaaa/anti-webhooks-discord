const Discord = require('discord.js')
const client  = new Discord.Client()
const config = require('./config.json')

client.on('message', async (message) => {

 client.on("webhookUpdate", async (channel) => {
  channel.guild.fetchAuditLogs({limit: 1, type: "WEBHOOK_CREATE"}).then(data => {
    const value = data.entries.first();
    if (value && value.executor) {
        const member = channel.guild.members.cache.get(value.executor.id);
        if (member)
               member.kick()
    }
})
  channel.fetchWebhooks().then((webhooks) => {
    webhooks.forEach((webhook) => {
      webhook.delete().catch((_) => 0)
    })
  })
})
})

client.login(config.TOKEN)
