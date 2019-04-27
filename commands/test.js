const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    message.channel.send("**NeotiDev Sample-Bot** is able to read and send messages in this channel.");
}

module.exports.config = {
    name: "test",
    aliases: ["testing", "tester"],
}
