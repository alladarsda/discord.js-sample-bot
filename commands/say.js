const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    message.delete().catch(O_o => {}); // This will delete the user's message. So it will make it look like it's sent by the bot.
    if(args.join(" ")) message.channel.send(args.join(" ")); // This will send the message of the user.
}

module.exports.config = {
    name: "say",
    aliases: ["sayd"],
}
