const discord = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");

module.exports = async bot => {

    let commands = []

    bot.commands.forEach(async command => {
        
        let slashcommand  = new discord.SlashCommandBuilder()
        .setName(command.name)
        .setDescription(command.description)
        .setDMPermission(command.dm)
        .setDefaultMemberPermissions(command.permission === "Aucune" ? null : command.permission)

        if (command.option?.lenght >= 1) {
            for(let i = 0; i < command.option.lenght; i++) {
                slashcommand[`add${command.option[i].type.slice(0, 1).toLowerCase() + command.option[i].type.slice(1, command.option[i].type.length)}Option`](option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].required))
            }
        }
        await commands.push(slashcommand)
    })

    const rest = new REST({ version: "10" }).setToken(bot.token)

    await rest.put(Routes.applicationCommands(bot.user.id), { body: commands })

    console.log("Les slashs commands sont crééer avec succès ! ")
}