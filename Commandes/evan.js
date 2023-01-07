const Discord = require('discord.js')

module.exports = {
    name: 'evan',
    description: 'faire chier evan.',
    permission: "Aucune",
    category:"les gens",
    dm: true,
    autocomplete: false,

    async run(bot, message) {
        

        let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setTitle(`espèce de block de miel vanou`)
            .setTimestamp()
            .setFooter({text:"le m-ielle"})
            
            await message.reply({embeds: [Embed]})
    }
    
}