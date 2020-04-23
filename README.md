## Dank Memer Auto-spammer

A bot that automatically uses Dank Memer commands!

# Setup

1. Download [node.js](https://nodejs.org/en/) **v12 and above required**

2. Install discord.js by typing `npm install discord.js` in your terminal.

3. In the `config.json` file, replace the empty string in the `"token": ""` line with your user token.

Example: `"token": "MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs"`

Use your real token of course!

### How to get user token:

1. Inspect Element and go to _Network_ tab

2. Refresh Discord

3. Click on "messages?limit=50", if you don't see it load a Discord text channel

4. Go to the Authorization header and copy whatever is there (**DO NOT SHARE YOUR DISCORD TOKEN WITH ANYONE! IT GIVES PEOPLE ACCESS TO YOUR DISCORD ACCOUNT!!!**)

# Setup continued

4. In `config.json` file, replace the empty string in `"whitelistedGuild": ""` with the server ID that the bot can only work in. You don't want it to respond to Dank Memer in other servers!

Example: `"whitelistedGuild": "612752177496326165"`

Use your real server ID of course! To get a server ID, make sure you have Developer Mode enabled in User Settings. Then right click the icon of the server you want to whitelist the bot to and click "Copy ID."

5. For each command in `config.json`, replace the `"channel": ""` with a channel ID that you want this command to be used. I don't recommend using multiple commands in the same channel as the intervals may sync up with each other and interrupt the usage of another command. Do this also for the `"otherCommandsChannel": ""` where `pls buy laptop` and `pls use candy` will be automatically used.

To get a channel ID, right click the channel and select Copy ID. You also need to have Developer Mode enabled.

6. For each command in `config.json`, replace the `"interval: null"` with the time in milliseconds that the bot will wait before resuing that command. It should be set to higher than the cooldown due to lag.

7. Replace `"whitelistedOptions": []` in the `search` command with the list of options that are safe for the bot to choose in `pls search`. This is to prevent risky ones like `car`, `street`, and `purse` resulting in "death" and losing all of your coins.

8. Replace `"wpm": null` in `config.json` with the words per minute you want the bot to type at. It gets suspicious if the typing delay isn't there!

9. Save the `config.json` file and open your terminal in the directory where the `config.json` and `main.js` files are.

10. Run `node main.js` and if all goes well, `Client is ready as YourUsername#0000!` should appear! `YourUsername#0000` will be replaced with the account you are using of course.

Here is an **example** of what a `config.json` should look like, **if you just paste this it won't work.**

```json
{
  "commands": {
    "beg": {
      "interval": 61000,
      "channel": "612782882012004371"
    },
    "search": {
      "interval": 61000,
      "channel": "612782900336656407",
      "whitelistedOptions": [
        "discord",
        "pocket",
        "coat",
        "mailbox",
        "dresser",
        "grass",
        "bed",
        "couch",
        "pantry",
        "laundromat"
      ]
    },
    "pm": {
      "interval": 121000,
      "channel": "679014974391320586"
    },
    "fish": {
      "interval": 41000,
      "channel": "612782943752028163"
    }
  },
  "whitelistedGuild": "612752177496326165",
  "dankMemerID": "270904126974590976",
  "wpm": 60,
  "otherCommandsChannel": "612807981423132676",
  "token": "MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs"
}
```
