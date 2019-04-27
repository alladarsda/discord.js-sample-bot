const config = require("../config.json");
module.exports = (client) => {
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    client.user.setActivity(`neotidev.com | ${config.prefix}help`)  
}
