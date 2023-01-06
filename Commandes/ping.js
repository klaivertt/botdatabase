const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Commands de ping. Tu crois quoi bg.',
    permission: "Aucune",
    dm: false,

    async run(bot, message) {
        await message.reply(`Ping: \`${bot.ws.ping}\``)
    }
}