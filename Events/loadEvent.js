const fs = require('fs')

module.exports = async bot => {

    fs.readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async file =>{

        let command = require (`../Events/${file}`)    
        
        console.log(command.split(".js").join(""))

  
    })
}