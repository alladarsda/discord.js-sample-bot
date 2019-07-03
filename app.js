// Load dependencies
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const path = require("path");
const TurkishCharacters = require("turkish-characters"); // Turkish-Characters is a NPM package that's made by NeotiDev.

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
        return console.log("[NeotiDev Sample-Bot] There aren't any events!");
    }
  jsfile.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.TurkishCharacters = TurkishCharacters;

fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        return console.log("[NeotiDev Sample-Bot] There aren't any commands!");
    }
    jsfile.forEach((f, i) => {
      let pull = require(`./commands/${f}`)
      client.commands.set(pull.config.name, pull);
      pull.config.aliases.forEach(alias => {
        client.aliases.set(alias, pull.config.name);
      })
    });
});

client.login(config.token);
