const Commando = require('discord.js-commando')
const { MessageEmbed } = require("discord.js")
const api = require('imageapi.js')

module.exports = class MemeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'memes',
            group: 'misc',
            memberName: 'memes',
            description: 'shows a meme from a random subreddit',
        })
    }

    async run(message) {
        let subreddits = ["comedyheaven", "dank", "meme", "memes"];
        let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
        let img = await api(subreddit, true);
        const Embed = new MessageEmbed()
            .setTitle(`A meme from r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
        message.channel.send(Embed);

    }
}
