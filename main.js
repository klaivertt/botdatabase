// JavaScript source code
const Discord = require("discord.js")
const intents  = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvent")
const loadDatabase = require("./Loaders/loadDatabase")
const config = require ("./config")


bot.commands = new Discord.Collection()
bot.color = "#00B6E8"
bot.db = loadDatabase()



bot.login(config.token)
loadCommands(bot)
loadEvents(bot)


  





