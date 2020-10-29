const Commando = require('discord.js-commando')

const axios = require('axios')

module.exports = class CatCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'search',
      group: 'misc',
      memberName: 'search',
      description: 'who cares'

    })
  }

  //  run = async (message) => {
  //    axios.get('https://dog.ceo/api/breeds/image/random')
  //      .then((res) => {
  //        console.log('RES:', res.data.message)
  //      message.reply(res.data.message)
  // })
  // .catch((err) => {
  //     console.error('ERR:', err)
  //   })


  // }

  run = async (message, args) => {
    axios({
      "method": "GET",
      "url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "6cb7ab1415msh2debddbf0b6f08cp182f53jsnc813eed36c22",
        "useQueryString": true
      }, "params": {
        "term": args
      }
    })
      .then((response) => {
        message.reply(response.data.list[0].permalink)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}