const Discord = require('discord.js')
const Commando = require('discord.js-commando')

module.exports = class ClearCommand extends Commando.Command {
    constructor(client) {
        super(client,{
            name:'clear',
            group:'moderation',
            memberName:'clear',
            description:'Clears messages',
            argsType:'single'
        })
    }

    async run(message,args){
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Lack of Perms!');
        }

        let deleteAmount;

        if (isNaN(args) || parseInt(args) <= 0) {
            return message.reply('Please put a number only!');
        }

        if (parseInt(args) > 30) {
            return message.reply('You can only delete 30 messages at a time!');
        } else {
            deleteAmount = parseInt(args);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`);


    }
}