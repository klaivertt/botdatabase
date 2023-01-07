const Discord = require('discord.js')

module.exports = {
    name: 'alex',
    description: 'la veriter.',
    permission: "Aucune",
    category:"les gens",
    dm: true,
    autocomplete: false,

    async run(bot, message) {
        

        let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setTitle(`au chômage`)
            .setTimestamp()
            .setFooter({text:"le chômage c'est fantastique"})

            
            await message.reply({embeds: [Embed]})
    }
}