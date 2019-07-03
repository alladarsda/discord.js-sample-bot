const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    message.delete().catch(O_o => {}); // This will delete the user's message. So it will make it look like it's sent by the bot.
    if(args.join(" ").length > 2048) return message.channel.send("I can only send messages that are shorter than 2048 characters.");
    if(args.join(" ")) message.channel.send(client.TurkishCharacters.convert(args.join(" "))); // This will send the modified version of the message.
}

module.exports.config = {
    name: "turkish-character-parser",
    aliases: ["turkishcharacterparser", "turkish-characters", "turkishcharacters"],
}
