const Discord = require('discord.js')
const got = require('got')
const { MessageEmbed } = require("discord.js")
const api = require('imageapi.js')
const Commando = require('discord.js-commando')


module.exports = class NsfwCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'nsfw',
            group: 'misc',
            memberName: 'nsfw',
            description: `You know what's this for`,
        })
    }

    async run(message) {
        const embed =new Discord.MessageEmbed()
        got('https://www.reddit.com/r/nsfw/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            dynamic:true
            console.log(memeUrl)
            message.channel.send(embed);
    })
    }
}