let botstoken = "NzU4OTQ0NjU3NzAyMzg3Nzcz.X22USg.QFv5VMS-wxT_qC_ShNgjSvcdJsk"; //Token To your discord bot
let usertoken = "NzU4MDg2ODIxMDc3OTc1MDUx.X2p10g.m6oGG1POkITd7WZ3N7zOjlIw-rQ"; //Token to your virtual account
let from = ["604717443885039699"];
let destination = ["758113977166331954"];
const Discord = require("discord.js");
const bot = new Discord.Client();
const user = new Discord.Client();
user.login(usertoken);
user.on("ready", ready => {
  const bot = new Discord.Client();
  bot.login(botstoken)
  console.log("Monitoring CyberAIO Checkout Log!");
  user.on("message", message => {
    if (from.includes(message.channel.id)) {
      if (typeof message.attachments.array()[0] != "undefined") {
        var media = message.attachments.array();
        let links = [];
        media.forEach(item => {
          links.push(item.links);
        });
        destination.forEach(channel => {
          bot.channels
            .get(channel)
            .send(message.author.tag + "\nImage URLs:\n" + urls.join("\n"));
        });
      }
      message.embeds.forEach(embed1 => {
        let newEmbed = new Discord.RichEmbed(embed1);
        console.log(newEmbed);
        destination.forEach(channel => {
          bot.channels.get(channel).send(newEmbed);
        });
      });
    }
  });
});

alternative = require('./alternative.js')
alternative = require('./alternative2.js')

//embed.addField("\u200B", "\u200B")

//roles.cache.get