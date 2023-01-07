const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Commands de ping. Tu crois quoi bg.',
    permission: "Aucune",
    category:"Test",
    dm: true,
    autocomplete: false,

    async run(bot, message) {
        

        let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setTitle(`Ping: \`${bot.ws.ping}\``)
            .setTimestamp()
            .setFooter({text:"Ping en ms"})
            
            await message.reply({embeds: [Embed]})
    }
    
}