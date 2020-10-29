const Commando = require('discord.js-commando')
const api = require('imageapi.js')
const { MessageEmbed } = require('discord.js')

module.exports = class RedditCoammand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'reddit',
            group: 'misc',
            memberName: 'reddit',
            description: 'For reddit',
        })
    }

    async run(message) {
        let subreddit = message.content.slice(8)

        if (!subreddit) {
            message.reply('Give a subreddit name atleast')
        }
        try {
            let img = await api(subreddit)
            const embed = new MessageEmbed()
                .setTitle(`A random post from r/${subreddit}`)
                .setColor("RANDOM")
                .setImage(img)
                .setURL(`https://reddit.com/r/${subreddit}`);
            message.channel.send(embed)


        } catch(err){
            message.channel.send(err)
        }
    }
}
