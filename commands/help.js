const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    message.channel.send(`Information about **NeotiDev Sample-Bot** :
**NeotiDev Sample-Bot** is a simple bot made by NeotiDev.
We made this project to help people making better bots.
----------
You can find the source of the project in this link :
<https://github.com/NeotiDev/discord.js-sample-bot>
----------
You can find NeotiDev's website in this link :
<https://neotidev.com>
----------`)
}

module.exports.config = {
    name: "help",
    aliases: ["source", "github", "git", "code", "backend", "codes", "source-code", "neotidev", "info", "information"],
}
