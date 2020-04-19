const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const zalgo = require('zalgolize');
const math = require('math-expression-evaluator');  
const figlet = require('figlet'); 
const fs = require('fs');
const ms = require('ms');
const prefix = '#'


client.on('message', message => {

    if(message.content === `${prefix}lock`) {
                        if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You don't have `MANAGE_CHANNELS` permission **');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("** ✅ | Done, The chat has been locked.  **")
           });
             }

 if(message.content === `${prefix}unlock`) {
                     if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('** You don't have `MANAGE_CHANNELS` permission **');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("**✅ | Done, The chat has been unlocked **")
           });
             }
             
});

client.on("message", message => {
   
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("#clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
      // By Alpha Codes - AboKhalil 26/7/2019
  let command = args[0];
 
  let user = message.mentions.users.first();
   
  let reasonkick = message.content.split(" ").slice(2).join(" ");
 
  if (command == prefix + "kick") {
 
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `KICK_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `KICK_MEMBERS`**");
    }
    if (!user) {
        message.channel.send("**يجب عليك إختيار الشخص المراد طرده**");
    }else if (!reasonkick) {
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    } else if (message.guild.member(user).hasPermission("KICK_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
 
 
    message.guild.member(user).kick()
    message.channel.send("**The Member Was Kicked **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonkick + "__**");
   
    user.send("**You are Kicked By** : " + message.author.tag);
    user.send("**Reason : __" + reasonkick + "__**");
    }
 }
 
});


client.on('message', message => {
if (message.author.bot) return;
  let args = message.content.split(" ");
 
  let command = args[0];
 
  let user = message.mentions.users.first();
 
  let bantime = args[2];
   
  let reasonban = message.content.split(" ").slice(3).join(" ");
   
  let timefilter;
 
  if (command == prefix + "ban") {
     
    if(!message.channel.guild){
    message.channel.send("**لا يمكن استعمال هذا الأمر في الخاص**");
}
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
        message.channel.send("**يجب ان يكون لديك خاصية `BAN_MEMBERS`**");
    }
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
        message.channel.send("**البوت لا يمتلك خاصية `BAN_MEMBERS`**");
    }
   
    if (!user){
        message.channel.send("**يجب عليك إختيار الشخص المراد حظره**");
    }else if (!bantime){
        message.channel.send(`**
        يجب عليك اختيار وقت الحظر
        15m حظر ربع ساعه
        30m حظر نصف ساعه
        1h حظر ساعه
        3h حظر ثلاث ساعات
        1d حظر يوم كامل
        3d حظر ثلاث ايام
        1w حظر اسبوع
        1mon حظر شهر كامل
        **`);
    }else if (!reasonban){
        message.channel.send("**يجب عليك إدراج سبب الحظر**");
    }
    if (message.guild.member(user).hasPermission("BAN_MEMBERS")){
    message.channel.send("**لا يمكن طرد هذا الشخص , فهو من الإدارة**");
    } else {
// By Alpha Codes - AboKhalil 26/7/2019
    if (bantime = "15m") {
    timefilter = 150000;
    } else if (bantime = "30m") {
        timefilter = 300000;
    } else if (bantime = "1h") {
        timefilter = 600000;
    } else if (bantime = "3h") {
        timefilter = 1800000;
    } else if (bantime = "1d") {
        timefilter = 14400000;
    } else if (bantime = "3d") {
        timefilter = 43200000;
    } else if (bantime = "1w") {
        timefilter = 100800000;
    } else if (bantime = "1mon"){
        timefilter = 432000000;
    }
    message.guild.member(user).ban()
    message.channel.send("**The Member Was Banned **" + user.tag + " **By** : " + message.author.tag);
    message.channel.send("**Reason : __" + reasonban + "__**");
   
    user.send("**You are Banned By** : " + message.author.tag);
    user.send("**Reason : __" + reasonban + "__**");
setTimeout(() => {
 
  message.guild.unban(bannedman);
 
        }, timefilter);
    }
 }
 
});


client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' #help'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/iXMiDo`);
    }, ms);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login('NzAwODQyNDExNjMwNTI2NjE0.XpwTuA.zrH-AV1iQ-pUmOEcpWD2kyTiKI0');
