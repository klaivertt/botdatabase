const discord = require("discord.js");
const loadSlashCommands = require("../Loaders/loadSlashCommands");
const loadDatabase = require("../Loaders/loadDatabase")

module.exports = async bot => {

    bot.db= await loadDatabase();
    bot.db.connect(function () {console.log("Base de données connectées avec succès!")
    })
        
    await loadSlashCommands(bot)

    console.log(`${bot.user.tag} est bien en ligne !`);

}