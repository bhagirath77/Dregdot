const Commando = require('discord.js-commando')

const axios = require('axios')

module.exports = class JokeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'love',
            group: 'misc',
            memberName: 'love',
            description: 'why though',
            argsType: 'multiple',
            argsCount: 2
        })
    }

    run = async(message, args) => {
        axios({
            "method":"GET",
            "url":"https://love-calculator.p.rapidapi.com/getPercentage",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"love-calculator.p.rapidapi.com",
            "x-rapidapi-key":"6cb7ab1415msh2debddbf0b6f08cp182f53jsnc813eed36c22",
            "useQueryString":true
            },"params":{
            "fname":args[0],
            "sname":args[1]
            }
            })
            .then((response)=>{
              message.reply(`The love percantage is ${response.data.percentage}`)
            })
            .catch((error)=>{
              console.log(error)
            })
    }


}