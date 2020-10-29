const Commando = require('discord.js-commando')

const axios = require('axios')

module.exports = class JokeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'joke',
            group: 'misc',
            memberName: 'joke',
            description: 'why though'
        })
    }

    run = async (message) => {
        axios({
            "method": "GET",
            "url": "https://joke3.p.rapidapi.com/v1/joke",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "joke3.p.rapidapi.com",
                "x-rapidapi-key": "6cb7ab1415msh2debddbf0b6f08cp182f53jsnc813eed36c22",
                "useQueryString": true
            }, "params": {
                "nsfw": "true"
            }
        })
            .then((response) => {
                message.reply(response.data.content)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}