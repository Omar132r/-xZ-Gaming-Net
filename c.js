const Discord = require('discord.js');
const client = new Discord.Client();


client.login('Mzk5NTc4NjkyODU2MTg0ODMy.DToiAg.MbEEAECs5kMgcIDMzzXrnqLw9_M'); 


client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by 3moree');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});


client.on('message', message => {
  if (message.content === "!help") {
message.author.send("**اوامر البوت**" + `  **
||| مرحبا بك في قائمة الأوامر الخاصة بسيرفر xZ Gaming Network||| 

      هنا يمكنك رؤية جميع الأوامر المختصة بالسيرفر

→←→←→←→←→←→←→←→←→←→←→←→←

📡General Commands | الاوامر العامه📡
!id
| يعرض متي دخولك ل ديسكورد وتاريخ دحولك لسيرفر

!server
| معلومات عن السيرفر 

ping
| بينق بونق

!ping
| معرفه سرعه اتصال البوت

!roll
| بمجرد كتابه امر  البوت راح يكتب رقم

!stats
| معلومات عن اليوت

!avatar  
| البوت راح يعرض صورتك

!times
|     لمعرفه الوقت بتوقيت السعوديه وليوم
!dt
| لمعرفه وقت الامارات او مكه المكرمه
!weather 
| لمعرفه طقس مدينه حقتك
!member
| يعرض لكم حاله الممبر كم شخص اونلاين وافلاين وكم شخص مشغول
!historical
| يغرض لك متي دخلت لسيرفر وديسكورد

سيتم اضافه اوامر كثيره قريبا
→←→←→←→←→←→←→←→←→←→←→←→←
✨Administrationr Commands / اوامر الاداره✨
!mute
| لاعطاء الشخص ميوت كتابي
!unmute
| لازاله ميوت عن شخص

!colors create
| لانشاء 200 لون بالسيرفر!
تنبيه راح ينضاف 200 لون ويكثر رتب

!ban
| لاعطاء شخص بان من سيرفر
!bc-bot
| لارسال رساله نصيه كل شخص بالسيرفر في خاص
!kick
| لطرد شخص من السيرفر
!clear
| لمسح شات
تنبيه لو مامسح رسايل شات اعلم انك مامعطي برمشن مطلوب!
→←→←→←→←→←→←→←→←→←→←→←→←
🎮Games Commands اوامر الالعاب🎮
!صراحه
| بيسالك شي البوت وانت تجاوب
!كت تويت
| لعبه كت تويت
!مريم
| لعبه مريم 
!خواطر
| لعبه خواطر
!عقاب
| يعطيك عقاب و لازم تنفذه 
!حب 
|يعطيك شعر عن الحب  
!لو خيروك
| يخيرك بين 2 شي وانت تختار
_______________________________________________________________

| ! | > في حال اردت مساعدة يمكنك ارسال رسائل خاصة للبوت وستصل للادارة

مطور البوت : ♪!>l3moree#0744
:grimacing: 
**`);
 }
});


client.on('message', message => {
  if(message.content === '!server') {
      var servername = message.guild.name
      var اونر = message.guild.owner
      var اعضاء = message.guild.memberCount
      var ايدي = message.guild.id
      var بلدالسيرفر = message.guild.region
      var الرومات = message.guild.channels.size
      var الرتب = message.guild.roles
      var عمل = message.guild.createdAt
      var الروم = message.guild.defaultChannel
      var server = new Discord.RichEmbed()
      .setThumbnail(message.guild.iconURL)
      .addField('اسم السيرفر', servername)
      .addField('اي دي السيرفر ' , [ايدي])
      .addField('أعضاء السيرفر', اعضاء)
      .addField('رومات السيرفر', الرومات)
      .addField('روم الشات الأساسي', الروم)
      .addField('صاحب السيرفر', اونر)
      .addField('بلد السيرفر', بلدالسيرفر)
      .addField('تاريخ افتتاح السيرفر', عمل)
      .setColor('RANDOM')

      message.channel.sendEmbed(server)
  }
});

client.on('message', message => {
  if (message.content === '!permissions') {
    message.channel.send('!Permissions: ' +
      JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4));
  }
});



client.on('ready', () => {
  console.log('Iam ready');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('Mzk5NTc4NjkyODU2MTg0ODMy.DTPOTQ.AiafIkrbQfJVRdTL1pU3AlbqMHA');


client.on('message', function(message) {
if(!message.channel.guild) return;
if(message.content === '!colors create') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('يتم انشاء ٢٠٠ لون انتضر | ▶️')
}else{
message.channel.send('ما معاك البرمشن المطلوب |❌🚫')
}
}
});

client.on('message', message=>{
if (message.content === '!colors create'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
setInterval(function(){})
let count = 0;
let ecount = 0;
for(let x = 1; x < 200; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});

client.on('message', message => {
      if (message.content === '!ping') {
      const embed = new Discord.RichEmbed()
  .setColor('#0000FF')
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
	

   if (message.content === '!roll') {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});


client.on('message', message => {
  let args = message.content.split(' ').slice(1).join(' ');
  if (message.content.startsWith('!bc-bot')){
  if(!message.author.id === '') return;
  message.channel.sendMessage('جار ارسال الرسالة :white_check_mark:')
  client.users.forEach(m =>{
  m.sendMessage(args)
  })
  }
  });

  client.on('message', message => {
    if (message.content.startsWith("!stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('Stats Bot / Info ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', client.guilds.size, true)
            .addField('``Bot In channel``' , `${client.channels.size}` , true)
            .addField('``Users rout``' ,`${client.users.size}` , true)
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
            .addField('``Bot Id``' , `${client.user.id}` , true)
            .setFooter('xSkillz / Team')
    })
}
});

client.on('ready', () => {
  console.log(`~~~~~~~~~~~~~~~~~`);
  console.log(`Logging into Discord`);
  console.log(`~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`on  ${client.guilds.size} Servers `);
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`xSkillz Team`,"http://twitch.tv/y04zgamer")
  client.user.setStatus("dnd")
});

client.on('message', message => {
  if (message.content.startsWith("!id")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

              var mentionned = message.mentions.users.first();
   var mentionavatar;
     if(mentionned){
         var mentionavatar = mentionned;
     } else {
         var mentionavatar = message.author;
         
     }
  let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
  .setThumbnail(`${mentionavatar.avatarURL}`)
 .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
 .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
  .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
 .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
    
    
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});

client.on('message', message => {
  if(message.content === "!bot") {
      const embed = new Discord.RichEmbed()
      .setColor("#00FFFF")
      .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
**Users**👥 **__${client.users.size}__**
**Channels**📚 **__${client.channels.size}__** `)
             message.channel.sendEmbed(embed);
         }
});




client.on('message', message => {
  if (message.content.startsWith("!avatar")) {
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});


function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}


const moment = require('moment');
             client.on('message', message => {
                 var prefix = "!"
           if (message.content.startsWith(prefix + "historical")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });



var prefix = "!";
client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 
                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });
    


client.on('message', message => {
  const moment = require('moment');
           var prefix = "!"
if (message.content.startsWith(prefix + "times")) {
let user = message.mentions.users.first();
var args = message.content.split(" ").slice(1);
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN'); //TN
var id = new  Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${heg.username}#${heg.discriminator} `,heg.avatarURL)
.setDescription([`
**Time** : ${moment().format('HH:mm:ss A')}
**Date** : ${moment().format('iYYYY/iM/iD - YYYY/M/D')}
**Today** : ${moment().format('dddd')}`])
message.channel.send(id)
};
});


    client.on("message", message => {
      var prefix = "!";
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
   if (!args[1]) {
                                  let x5bz1 = new Discord.RichEmbed()
                                  .setDescription("-clear <number>")
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

  var prefix = "!";  
  const weather = require('weather-js');
client.on('message', message => {
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.
    if (msg.startsWith(prefix + 'WEATHER')) { // This checks to see if the beginning of the message is calling the weather command.
        // You can find some of the code used here on the weather-js npm page in the description.

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) message.channel.send(err);

            // We also want them to know if a place they enter is invalid.
            if (result.length === 0) {
                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }

            // Variables
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output

            // Let's use an embed for this.
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
                .setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
                .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
                .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
                .addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

                // Now, let's display it when called
                message.channel.send({embed});
        });
    }

});

var prefix = "!";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
  if (message.content === "!roles") {
       if (!message.guild) return;
      var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
         .addField(`${message.guild.name}`,`**Roles :white_check_mark:**`)
       .addField(':arrow_down: Number Roles. :heavy_check_mark:',`** ${message.guild.roles.size}**`)
       .addField(':arrow_down: Name Roles. :heavy_check_mark:',`**${roles}**`)
      message.channel.sendEmbed(embed);
  }
});

client.on('message', message => {
  if(message.content == '!member') {
  const embed = new Discord.RichEmbed()
  .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:red_circle: dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:large_orange_diamond: idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_circle: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
🔹  all:  ${message.guild.memberCount}**`)         
       message.channel.send({embed});

  }
});


const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
 '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
client.on('message', message => {
if (message.content.startsWith('!صراحه')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبة صراحة ..")
.setColor('RANDOM')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}
});


const Za7f = [
 "**صورة وجهك او رجلك او خشمك او يدك**.",
 "**اصدر اي صوت يطلبه منك الاعبين**.",
 "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
 "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
 "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
 "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
 "**ذي المرة لك لا تعيدها**.",
 "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
 "**صور اي شيء يطلبه منك الاعبين**.",
 "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
 "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
 "**سو مشهد تمثيلي عن مصرية بتولد**.",
 "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
 "**ذي المرة لك لا تعيدها**.",
 "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
 "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
 "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
 "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
 "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
 "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
 "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
 "**اتصل على امك و قول لها انك تحبها :heart:**.",
 "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
 "**قل لواحد ماتعرفه عطني كف**.",
 "**منشن الجميع وقل انا اكرهكم**.",
 "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
 "**روح المطبخ و اكسر صحن او كوب**.",
 "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
 "**قول لاي بنت موجود في الروم كلمة حلوه**.",
 "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
 "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
 "**قول قصيدة **.",
 "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
 "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
 "**اول واحد تشوفه عطه كف**.",
 "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
 "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
 "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
 "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
 "**تاخذ عقابين**.",
 "**قول اسم امك افتخر بأسم امك**.",
 "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
 "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
 "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
 "**تتصل على الوالده  و تقول لها خطفت شخص**.",
 "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
 "**����تصل على الوالده  و تقول لها  احب وحده**.",
   "**تتصل على شرطي تقول له عندكم مطافي**.",
   "**خلاص سامحتك**.",
   "** تصيح في الشارع انا  مجنوون**.",
   "** تروح عند شخص تقول له احبك**.",

]


client.on('message', message => {
if (message.content.startsWith("!عقاب")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('xSkillz Team' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
 }
});


var prefix = "!";
var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
 client.on('message', message => {
     var args = message.content.split(" ").slice(1);
 if(message.content.startsWith(prefix + 'لو خيروك')) {
      var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
 }
});



const cuttweet = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
if (message.content.startsWith("!كت تويت")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});

const secreT = [
"**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
"**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
"**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
"**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
"**ان تعالج ألمك بنفسك تلك هى القوة**.", 
"**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
"**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
"**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
"**المناقشات العقيمة لا تنجب افكارا**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


client.on('message', message => {
if (message.content.startsWith("!خواطر")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')

.setThumbnail(message.author.avatarURL) 
.addField('لعبه خواطر' ,
`${secreT[Math.floor(Math.random() * secreT.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});




const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


client.on('message', message => {
if (message.content.startsWith("!حب")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('xSkillz' ,
`${Love[Math.floor(Math.random() * Love.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});

client.on('message', message => {
  if (message.content === "!!server") {
  if(!message.channel.guild) return;
  const millis = new Date().getTime() - message.guild.createdAt.getTime();
  const now = new Date();
  
  const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
  const days = millis / 1000 / 60 / 60 / 24;
  let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
  var embed  = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
  .addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
  .addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
  .addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
  .addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
  .addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
  .addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
  .addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
  .addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
  
  .addField("👥عدد الاعضــاء",`
  **${message.guild.memberCount}**`)
  .setThumbnail(message.guild.iconURL)
  .setColor('RANDOM')
  message.channel.sendEmbed(embed)
  
  }
  });

client.on('message', message => {
  if (message.content.startsWith("!wlc")) {
                                  var mentionned = message.mentions.users.first();
              var mentionavatar;
                if(mentionned){
                    var mentionavatar = mentionned;
                } else {
                    var mentionavatar = message.author;
                    
                }
                let bot;
                if(message.author.bot) {
                    bot = 'Bot'
                } else {
                    bot = 'User'
                } 
   var EsTeKnAN = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setThumbnail(`${mentionavatar.avatarURL}`)
   .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
   .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
   .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
    message.channel.sendEmbed(EsTeKnAN);
   }
 });


 var prefix = "!"
 client.on('message', message => {
   if (message.author.x5bz) return;
   if (!message.content.startsWith(prefix)) return;
 
   let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
   if (command == "ban") {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
          
   if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
   if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
   let user = message.mentions.users.first();
   let reason = message.content.split(" ").slice(2).join(" ");
   /*let b5bzlog = client.channels.find("name", "5bz-log");
 
   if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
   if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
   if(!reason) return message.reply ("**اكتب سبب الطرد**");
   if (!message.guild.member(user)
   .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
   message.guild.member(user).ban(7, user);
 
   const banembed = new Discord.RichEmbed()
   .setAuthor(`BANNED!`, user.displayAvatarURL)
   .setColor("RANDOM")
   .setTimestamp()
   .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
   .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
   .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   message.channel.send({
     embed : banembed
   })
 }
 });


 var prefix = "!"
 client.on('message', message => {
   if (message.author.x5bz) return;
   if (!message.content.startsWith(prefix)) return;
 
   let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
   if (command == "kick") {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
          
   if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
   if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
   let user = message.mentions.users.first();
   let reason = message.content.split(" ").slice(2).join(" ");
   /*let b5bzlog = client.channels.find("name", "5bz-log");
 
   if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
   if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
   if(!reason) return message.reply ("**اكتب سبب الطرد**");
   if (!message.guild.member(user)
   .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
   message.guild.member(user).kick();
 
   const kickembed = new Discord.RichEmbed()
   .setAuthor(`KICKED!`, user.displayAvatarURL)
   .setColor("RANDOM")
   .setTimestamp()
   .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
   .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
   .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   message.channel.send({
     embed : kickembed
   })
 }
 });



 client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});



   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "!unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});


client.on("message", message => {
  const prefix = "!"
            
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === prefix + "image"){ 
        const embed = new Discord.RichEmbed()

    .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor(0x164fe3)
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
                  .setTimestamp()

 message.channel.send({embed});
    }
});


client.on('message', message => {
  var prefix = "!"
if (message.content.startsWith(prefix + "uptime")) {
 let uptime = client.uptime;

 let days = 0;
 let hours = 0;
 let minutes = 0;
 let seconds = 0;
 let notCompleted = true;

 while (notCompleted) {

     if (uptime >= 8.64e+7) {

         days++;
         uptime -= 8.64e+7;

     } else if (uptime >= 3.6e+6) {

         hours++;
         uptime -= 3.6e+6;

     } else if (uptime >= 60000) {

         minutes++;
         uptime -= 60000;

     } else if (uptime >= 1000) {
         seconds++;
         uptime -= 1000;

     }

     if (uptime < 1000)  notCompleted = false;

 }

 message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});


 
client.on("message", msg => {
  var prefix = "f!";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
 .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
 .setColor("RANDOM")
 .setFooter(msg.author.username , msg.author.avatarURL)
 .setThumbnail(`${msg.author.avatarURL}`)
 .setTimestamp()
 .setURL(`${msg.author.avatarURL}`)
 .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
 .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
 .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
 .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});



client.on('message', function(message) {
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      var iiMo = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .setTitle('``عندي رساله جديده بل خاص !``')
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
      .setFooter(`From **${message.author.tag} (${message.author.id})**`)
  client.channels.get("399516067770138626").send({embed:iiMo});
  }
});


var prefix = "!";
var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


var prefix = "!"

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'edit')) {
        message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
    }
});


let id;
let guild;
let emojiHasPermission;

client.on('ready', () => {
  console.log('Connected');
});

client.on('message', message => {
  id = client.user.id;
  guild = message.guild;
  emojiHasPermission = permission => {
    console.log(permission);
    if (guild.member(id).permissions.has(permission, false)) {
      return ':white_check_mark:';
    } else {
      return ':x:';
    }
  };
  if (message.content === '!perm') {
  message.channel.send({embed: {
    title: ':tools: Permissions',
    color: 0x06DF00,
    fields: [
      {
        name: 'Administrator :',
        value: emojiHasPermission('ADMINISTRATOR'),
        inline: true
      },
      {
        name: 'Create Instant Invite :',
        value: emojiHasPermission('CREATE_INSTANT_INVITE'),
        inline: true
      },
      {
        name: 'Kick Members :',
        value: emojiHasPermission('KICK_MEMBERS'),
        inline: true
      },
      {
        name: 'Ban Members :',
        value: emojiHasPermission('BAN_MEMBERS'),
        inline: true
      },
      {
        name: 'Manage Channels :',
        value: emojiHasPermission('MANAGE_CHANNELS'),
        inline: true
      },
      {
        name: 'Manage Guild :',
        value: emojiHasPermission('MANAGE_GUILD'),
        inline: true
      },
      {
        name: 'Add Reactions :',
        value: emojiHasPermission('ADD_REACTIONS'),
        inline: true
      },
      {
        name: 'View Audit Log :',
        value: emojiHasPermission('VIEW_AUDIT_LOG'),
        inline: true
      },
      {
        name: 'Manage Messages :',
        value: emojiHasPermission('MANAGE_MESSAGES'),
        inline: true
      },
      {
        name: 'Embed Links :',
        value: emojiHasPermission('EMBED_LINKS'),
        inline: true
      },
      {
        name: 'Attach Files :',
        value: emojiHasPermission('ATTACH_FILES'),
        inline: true
      },
      {
        name: 'Read Message History :',
        value: emojiHasPermission('READ_MESSAGE_HISTORY'),
        inline: true
      },
      {
        name: 'Mention Everyone :',
        value: emojiHasPermission('MENTION_EVERYONE'),
        inline: true
      },
      {
        name: 'Use External Emojis :',
        value: emojiHasPermission('USE_EXTERNAL_EMOJIS'),
        inline: true
      },
      {
        name: 'Connect :',
        value: emojiHasPermission('CONNECT'),
        inline: true
      },
      {
        name: 'Speak :',
        value: emojiHasPermission('SPEAK'),
        inline: true
      },
      {
        name: 'Mute Members :',
        value: emojiHasPermission('MUTE_MEMBERS'),
        inline: true
      },
      {
        name: 'Deafen Members :',
        value: emojiHasPermission('DEAFEN_MEMBERS'),
        inline: true
      },
      {
        name: 'Move Members :',
        value: emojiHasPermission('MOVE_MEMBERS'),
        inline: true
      },
      {
        name: 'Use VAD :',
        value: emojiHasPermission('USE_VAD'),
        inline: true
      },
      {
        name: 'Change Nickname :',
        value: emojiHasPermission('CHANGE_NICKNAME'),
        inline: true
      },
      {
        name: 'Manage Nicknames :',
        value: emojiHasPermission('MANAGE_NICKNAMES'),
        inline: true
      },
      {
        name: 'Manage Roles :',
        value: emojiHasPermission('MANAGE_ROLES'),
        inline: true
      },
      {
        name: 'Manage Webhooks :',
        value: emojiHasPermission('MANAGE_WEBHOOKS'),
        inline: true
      },
      {
        name: 'Manage Emojis :',
        value: emojiHasPermission('MANAGE_EMOJIS'),
        inline: true
      }
    ]
  }
  });
  }
});


  client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('xSkillzBot', 'https://cdn.discordapp.com/icons/390551815072251904/418fa2788d8115808951c9881ba8f190.jpg')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`xZ`, '')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});
