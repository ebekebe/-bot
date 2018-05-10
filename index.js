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
      .addField("/aide", "pour afficher les commandes.", true)
      .addField("/cree", "pour voir la date de creatation du bot.", true)
      .addField("/createur", "pour voir le createur du bot.", true)
      .addField("/grade", "grade de la faction", true)
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

});
