const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: 'un coup de main?',
    permission: "Aucune",
    category:"Information",
    dm: true,
    autocomplete: true,
    
    option:[
        {
            type: "String",
            name: "command",
            description: 'La commande à afficher',
            dm: true,
            required: false
            

        }

    ],
        
    async run(bot, message, args) {

        let command;
        if(args.getString("commande")) {
            command = bot.commands.get(args.getString("commande"));
            if(!command) return message.reply("Pas de commande !")

        }

        if(!command) {
            let categories = [];
            bot.commands.forEach(command =>{
                if(!categories.includes(command.category)) categories.push(command.category)
            }) 

            let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setTitle(`Commandes du bot`)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Commandes disponibles : \`${bot.commands.size}\`\nCategories : \`${categories.length}\``)
            .setTimestamp()
            .setFooter({text: "commandes du bot"})
            await categories.sort().forEach(cat => {

                let commands = bot.commands.filter(cmd => cmd.category === cat)
                Embed.addFields({name: `${cat}`, value: `${commands.map(cmd => `\`${cmd.name}\` :  ${cmd.description}`).join("\n")}`})
            })       
            
            await message.reply({embeds: [Embed]})
        }
            else{

            let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setTitle(`Commandes ${command.name}`)
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Nom : \`${command.name}\`\nDescription : \`${command.description}\`\nPermissions requise : \`${typeof command.permission !== "bigint" ? command.permission : new Discord.PermissionsBitField(command.permission).toArray(false)}\`\nCommande en DM : \`${command.dm ? "Oui" : "Non"}\`\`\nCategory : \`${command.category}\`\``)
            .setTimestamp()
            .setFooter({text: "commandes du bot"})

            await message.reply({embeds: [Embed]})
        }
    }
}