/* 
  This requires discord.js version 11.5.1 and Node.js v12
  This currently works as of the version of Dank Memer on 23 April 2020
  Do this in a private server as it will respond to commands ran by anyone!
*/

const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
let channels = {};

function sendMessage(channel, content) {
  channel.startTyping();
  setTimeout(() => {
    channel.send(content);
    console.log(`Sent '${content}' in #${channel.name}!`);
    channel.stopTyping();
  }, (1000 / (config.wpm / 12)) * content.length);
}

client.on("ready", async () => {
  console.log(`Client is ready as ${client.user.tag}!`);
  channels.beg = client.channels.get(config.commands.beg.channel);
  channels.search = client.channels.get(config.commands.search.channel);
  channels.pm = client.channels.get(config.commands.pm.channel);
  channels.fish = client.channels.get(config.commands.fish.channel);
  channels.other = client.channels.get(config.otherCommandsChannel); // Channel for commands such as "pls buy laptop" and "pls use candy"
  setInterval(() => {
    sendMessage(channels.beg, "pls beg");
  }, config.commands.beg.interval);
  setInterval(() => {
    sendMessage(channels.search, "pls search");
  }, config.commands.search.interval);
  setInterval(() => {
    sendMessage(channels.pm, "pls pm");
  }, config.commands.pm.interval);
  setInterval(() => {
    sendMessage(channels.fish, "pls fish");
  }, config.commands.fish.interval);
});

client.on("message", async message => {
  if (!message.guild) return;
  if (
    message.guild.id !== config.whitelistedGuild ||
    message.author.id !== config.dankMemerID
  )
    return;
  if (
    message.content.startsWith(
      "Where do you want to search? Pick from the list below and type it in chat."
    )
  ) {
    let content = message.content.split("\n")[1];
    if (!content) return;
    content = content.split(", ");
    let cleaned = [];
    for (let c of content) {
      c = c.replace(/`/g, "");
      cleaned.push(c);
    }
    console.log(`Recieved options for pls search: ${cleaned}`);
    let allowed = cleaned.filter(c =>
      config.commands.search.whitelistedOptions.includes(c)
    );
    console.log(`Allowed options: ${allowed}`);
    if (!allowed.length) {
      sendMessage(channels.search, "none");
    } else {
      if (allowed.includes("dresser")) {
        sendMessage(channels.search, "dresser");
      } else {
        sendMessage(
          channels.search,
          allowed[Math.floor(Math.random() * allowed.length)]
        );
      }
    }
    return;
  }
  if (message.content.endsWith("**Candy**")) {
    return sendMessage(channels.other, "pls use candy");
  }
  if (
    message.content.startsWith("**__What type of meme do you want to post?__**")
  ) {
    return sendMessage(channels.pm, "nerd"[Math.floor(Math.random() * 4)]);
  }
  if (
    message.content === "oi you need to buy a laptop in the shop to post memes"
  ) {
    return sendMessage(channels.other, "pls buy laptop");
  }
  if (message.content.search(/Type|typing/) !== -1) {
    let split = message.content.split(/Type |typing /);
    console.log(split);
    for (const arg of split) {
      if (arg.split(/ +/)[0].startsWith("`")) {
        let eventContent = [];
        for (const a of arg.split(/ +/)) {
          eventContent.push(a);
          if (a.endsWith("`")) break;
        }
        eventContent = eventContent.join(" ").replace(/`/g, "");
        eventContent = eventContent.replace(new RegExp(String.fromCharCode(65279), "g"), "") // Removes sneaky zero width spaces
        sendMessage(message.channel, eventContent);
      }
    }
  }
});

client.login(config.token)
