const Discord = require('discord.js')

module.exports = {
    name: 'anael',
    description: 'la veriter.',
    permission: "Aucune",
    category:"les gens",
    dm: true,
    autocomplete: false,

    async run(bot, message) {
        

        let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setTitle(`Toujours à faire des défis et des concours`)
            .setTimestamp()
            .setFooter({text:"Sa vie est un défi"})
            
            await message.reply({embeds: [Embed]})
    }
    
}