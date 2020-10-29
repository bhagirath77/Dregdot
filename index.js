//const Discord = require('discord.js');
const path = require('path')
//const client = new Discord.Client();
const config = require('./config.json')


const Commando = require('discord.js-commando')

const client = new Commando.CommandoClient({
    owner: '694522114077753344',
    commandPrefix: config.prefix
})

const fs = require('fs');
const { dir } = require('console');
const { dirname } = require('path');

client.once('ready', () => {
    console.log('I am good');

    client.user.setActivity('Hentai', { type: "WATCHING" }).catch(console.error);
    
    client.registry
        .registerGroups([
            ['misc', 'misc commands'],
            ['moderation', 'moderation commands']
        ])
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, 'cmds'))

    
    const basefile = 'command-base.js'
    const commandbase = require(`./commands/${basefile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== basefile) {
                const option = require(path.join(__dirname, dir, file))
                commandbase(client, option)


            }
        }

    }

    readCommands('commands')

})

client.login(process.env.token)