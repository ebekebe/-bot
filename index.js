const Discord = require('discord.js');

var Bot = new Discord.Client();
var prefix = ("/");

Bot.on('ready', () => {
  Bot.user.setPresence({ game: { name: '[/aide] Bot sharingan'}})
  console.log("Bot pret !");
});

Bot.login(process.env.TOKEN);

Bot.on('message', message => {

  if (message.content === prefix + "aide"){
    var embed = new Discord.RichEmbed()
      .setTitle("Liste des commandes")
      .setDescription("Embed des commande")
      .setColor('#c0392b')
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
        .setTitle("Grade faction")
        .setAuthor("Dmitri", "https://i.imgur.com/lm8s41J.png")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setFooter("Кховтсиновскаыа ")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
        .addField("This is a field title, it can hold 256 characters",
          "This is a field value, it can hold 2048 characters.")
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        .addField("Pakhan/Пакхан: ", "Chef d'une famille criminelle ou d'un gang russe.", true)
        /*
         * Blank field, useful to create some space.
         */
        .addBlankField(true)
        .addField("Sovietnik/Совиетник: ", "Le conseiller du Pakhan.", true)
        .addField("Obshchak/Общак: ", "Le trésorier et le chef bookmarker.", true)
        .addField("Torpedo/Торпедо: ", "Un tueur à gages pour la famille ou le gang", true)
        .addField("Brigadier/Бригадиер: ", "Un chef d'un groupe de membres inférieurs de la famille ou d'un gang.", true)
        .addField("Boyevik/Боыевик: ", "Un membre de la famille ou du gang qui organise des crimes et fait des rackets.", true)
        .addField("Kryshas/Крышас: ", "Un exécuteur et un collecteur de dettes.", true)
        .addField("Byki/Быки: ", "Un garde du corps pour les membres supérieurs de la famille ou du gang.", true)
        .addField("Shestyorka/Схестыорка: ", "Un associé qui fait un travail pour la famille ou le gang mais qui n'est pas un membre à part entière.", true);


      message.channel.send({ embed });
      console.log("grade !");
    }

});
