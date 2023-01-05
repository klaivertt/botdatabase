// JavaScript source code
const Discord = require("discord.js")
const intents  = new Discord.IntentBitsField(3276799)
const bot = new Discord.Client({intents})
const config = require ("./config")


bot.login(config.token)
bot.on("ready", async ()  => { 

    console.log(`${bot.user.tag} est bien en ligne`)
})