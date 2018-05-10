const Discord = require('discord.js');

var Bot = new Discord.Client();
var prefix = ("/");

Bot.on('ready', () => {
  Bot.user.setPresence({ game: { name: '[/aide]'}})
  console.log("Bot pret !");
});

Bot.login(process.env.TOKEN);

Bot.on('guildMemberAdd', member => {
  member.guild.channel.find("name", "général").send('bienvenue ${member}')})

Bot.on('message', message => {

  if (message.content === prefix + "aide"){
    var embed = new Discord.RichEmbed()
      .setTitle("Liste des commandes")
      .setDescription("Embed des commande")
      .setColor(0x00AE86)
      .addField("/aide", "pour afficher les commandes.",)
      .addField("/cree", "pour voir la date de creatation du bot./ plus operationnel", )
      .addField("/createur", "pour voir le createur du bot./ plus operationnel", )
      .addField("/grade", "grade de la faction", )
    .addField("/r1 à /r9", "description des grade faction", )
      .setFooter("edite by Mohsvitry")
    message.channel.sendEmbed(embed);
     console.log("commande aide demandée !");
  }

    if (message.content === prefix + "grade") {
      const embed = new Discord.RichEmbed()
        .setTitle("hiérarchie faction")
        .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
        .setDescription("Grade faction")
        .setColor(0x00AE86)
        .setFooter("Кховтсиновскаыа ","https://i.imgur.com/hdWynbs.jpg",  )
        .addField("Pakhan/Пакхан: ", "Chef d'une famille criminelle ou d'un gang russe.",)
        .addField("Sovietnik/Совиетник: ", "Le conseiller du Pakhan.", )
        .addField("Obshchak/Общак: ", "Le trésorier et le chef bookmarker.", )
        .addField("Torpedo/Торпедо: ", "Un tueur à gages pour la famille ou le gang", )
        .addField("Brigadier/Бригадиер: ", "Un chef d'un groupe de membres inférieurs de la famille ou d'un gang.", )
        .addField("Boyevik/Боыевик: ", "Un membre de la famille ou du gang qui organise des crimes et fait des rackets.", )
        .addField("Kryshas/Крышас: ", "Un exécuteur et un collecteur de dettes.", )
        .addField("Byki/Быки: ", "Un garde du corps pour les membres supérieurs de la famille ou du gang.", )
        .addField("Shestyorka/Схестыорка: ", "Un associé qui fait un travail pour la famille ou le gang mais qui n'est pas un membre à part entière.", );
      message.channel.send({ embed });
      console.log("grade !");
    }
  
   if (message.content === prefix + "r1") {
    const embed = new Discord.RichEmbed()
      .setTitle("Pakhan/Пакхан")
      .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
      .setDescription("chef faction")
      .setColor(0x00AE86)
      .setThumbnail("https://i.imgur.com/hdWynbs.jpg")
      .setFooter("Кховтсиновскаыа ", "https://i.imgur.com/hdWynbs.jpg", )
      .addField("Pakhan/Пакхан: ", "Chef d'une famille criminelle ou d'un gang russe.")
      .addField("test")
     
    message.channel.send({ embed });
    console.log("commande r1 !");
  }
if (message.content === prefix + "r2") {
    const embed = new Discord.RichEmbed()
      .setTitle("Sovietnik/Совиетник")
      .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
      .setDescription("Bras droit du chef")
      .setColor(0x00AE86)
      .setThumbnail("https://i.imgur.com/hdWynbs.jpg")
      .setFooter("Кховтсиновскаыа ", "https://i.imgur.com/hdWynbs.jpg", )
      .addField("Sovietnik/Совиетник : ", "Le conseiller du Pakhan.")
      .addField("test")
     
    message.channel.send({ embed });
    console.log("commande r2 !");
  }

  if (message.content === prefix + "r3") {
    const embed = new Discord.RichEmbed()
      .setTitle("Obshchak/Общак")
      .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
      .setDescription("trésorier")
      .setColor(0x00AE86)
      .setThumbnail("https://i.imgur.com/hdWynbs.jpg")
      .setFooter("Кховтсиновскаыа ", "https://i.imgur.com/hdWynbs.jpg", )
      .addField("Obshchak/Общак :", "Le trésorier et le chef bookmarker.")
      .addField("test")
     
    message.channel.send({ embed });
    console.log("commande r3 !");
  }

  if (message.content === prefix + "r4") {
    const embed = new Discord.RichEmbed()
      .setTitle("Torpedo/Торпедо")
      .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
      .setDescription("Un tueur à gages")
      .setColor(0x00AE86)
      .setThumbnail("https://i.imgur.com/hdWynbs.jpg")
      .setFooter("Кховтсиновскаыа ", "https://i.imgur.com/hdWynbs.jpg", )
      .addField("Torpedo/Торпедо : ", "Un tueur à gages pour la famille ou le gang")
      .addField("test")

    message.channel.send({ embed });
    console.log("commande r4 !");
  }


  if (message.content === prefix + "r5") {
    const embed = new Discord.RichEmbed()
      .setTitle("Brigadier/Бригадиер")
      .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
      .setDescription("Un chef de groupe")
      .setColor(0x00AE86)
      .setThumbnail("https://i.imgur.com/hdWynbs.jpg")
      .setFooter("Кховтсиновскаыа ", "https://i.imgur.com/hdWynbs.jpg", )
      .addField("Brigadier/Бригадиер : ", "Un chef d'un groupe de membres inférieurs de la famille ou d'un gang.")
      .addField("test")

    message.channel.send({ embed });
    console.log("commande r5 !");
  }


  if (message.content === prefix + "r6") {
    const embed = new Discord.RichEmbed()
      .setTitle("Boyevik/Боыевик ")
      .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
      .setDescription("Un membre de la famille")
      .setColor(0x00AE86)
      .setThumbnail("https://i.imgur.com/hdWynbs.jpg")
      .setFooter("Кховтсиновскаыа ", "https://i.imgur.com/hdWynbs.jpg", )
      .addField("Boyevik/Боыевик : ", "Un membre de la famille ou du gang qui organise des crimes et fait des rackets.")
      .addField("test")

    message.channel.send({ embed });
    console.log("commande r6 !");
  }


  if (message.content === prefix + "r7") {
    const embed = new Discord.RichEmbed()
      .setTitle("Kryshas/Крышас")
      .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
      .setDescription("collecteur de dettes")
      .setColor(0x00AE86)
      .setThumbnail("https://i.imgur.com/hdWynbs.jpg")
      .setFooter("Кховтсиновскаыа ", "https://i.imgur.com/hdWynbs.jpg", )
      .addField("Kryshas/Крышас : ", "Un exécuteur et un collecteur de dettes. ",)
      .addField("test")

    message.channel.send({ embed });
    console.log("commande r7 !");
  }



  if (message.content === prefix + "r8") {
    const embed = new Discord.RichEmbed()
      .setTitle("Byki/Быки")
      .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
      .setDescription("garde du corps")
      .setColor(0x00AE86)
      .setThumbnail("https://i.imgur.com/hdWynbs.jpg")
      .setFooter("Кховтсиновскаыа ", "https://i.imgur.com/hdWynbs.jpg", )
      .addField("Byki/Быки :", "Un garde du corps pour les membres supérieurs de la famille ou du gang.")
      .addField("test")

    message.channel.send({ embed });
    console.log("commande r8 !");
  }


  if (message.content === prefix + "r9") {
    const embed = new Discord.RichEmbed()
      .setTitle("Shestyorka/Схестыорка ")
      .setAuthor("Dmitri", "https://i.imgur.com/hdWynbs.jpg")
      .setDescription("associé")
      .setColor(0x00AE86)
      .setThumbnail("https://i.imgur.com/hdWynbs.jpg")
      .setFooter("Кховтсиновскаыа ", "https://i.imgur.com/hdWynbs.jpg", )
      .addField("Shestyorka/Схестыорка : ", "Un associé qui fait un travail pour la famille ou le gang mais qui n'est pas un membre à part entière.",)
      .addField("test")

    message.channel.send({ embed });
    console.log("commande r9 !");
  }



  
});
