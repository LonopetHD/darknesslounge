const discord = require("discord.js");
const { token, r1 , r2 ,r3 ,r4, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, prefix } = require("./config.json");

const client = new discord.Client({
    partials: ["MESSAGE","CHANNEL","REACTION"],
    intents: [98045]
});

client.on('ready', () => {
    client.user.setPresence({
      activities: [{ name: 'Ich bin ein Bot | 🌙', type: 'PLAYING' }],
      status: 'idle'
    });
  });

  client.on("messageCreate", async(message)=>{
    if(message.content.toLowerCase().startsWith(prefix+"setup-selfroles")){
        if (message.member.permissions.has('ADMINISTRATOR')) {
            let embed = new discord.MessageEmbed()
            .setTitle("``🌙``︱Wähle deine Rollen!")
            .setImage("https://cdn.discordapp.com/attachments/1105475698514206740/1105838974066503791/Perso.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
            .setColor("#9dabb3")
            .setAuthor("Personalisierung","https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
            .setDescription("> Hier kannst du **dein** Profil personalisieren um unnötige Pings zu vermeiden oder um **dich** zu besschreiben")

            let row = new discord.MessageActionRow()
              .addComponents(
                new discord.MessageSelectMenu()
                .setCustomId("Menu")
                .setPlaceholder("Klick auf mich!")
                .addOptions(
                    {
                        label:"Pings",
                        description:"Wähle deine Pings aus um unnötige zu vermeiden",
                        value:"Ping",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"Selfroles",
                        description:"Wähle mich aus, um dich zu besschreiben",
                        value:"Self",
                        emoji:"<:special:1105853689199079514>"
                    },
                )
                )

            message.channel.send({embeds:[embed], components: [row]})

        }else{
            message.reply("**Du hast keine Rechte dazu!**")
        }
    }
})

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isSelectMenu()) return;

	const value = interaction.values[0];

	if (value === 'Ping') {
		let embed = new discord.MessageEmbed()
			.setTitle('``🌙``︱Pings')
			.setDescription('> Wähle **deine** Pings um nicht umsonst benachrichrtigt zu werden')
            .setColor("#9dabb3")
            .setAuthor("Wähle deine Selfroles!", "https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
            .setImage("https://cdn.discordapp.com/attachments/1105475698514206740/1105838974066503791/Perso.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
            .setFooter("Viel Spaß!", "https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")

            let row = new discord.MessageActionRow()
              .addComponents(
                new discord.MessageSelectMenu()
                .setCustomId("Menu")
                .setPlaceholder("Klick auf mich!")
                .addOptions(
                    {
                        label:"Neuigkeiten",
                        description:"Werde für Serverneuigkeiten benachrichtigt",
                        value:"Neuig",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"Umfragen",
                        description:"Werde benachrichtigt wenn eine Umfrage ansteht",
                        value:"Umf",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"Gewinnspiele",
                        description:"Werde benachrichtigt wenn ein Gewinnspiel ansteht",
                        value:"Gewinnspiel",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"Sonstieges",
                        description:"Werde benachrichtigt bei sonstiegen Sachen",
                        value:"Sonst",
                        emoji:"<:special:1105853689199079514>"
                    }
                )
                )

		await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });      
	}
     else if (value === 'Self') {
		let embed = new discord.MessageEmbed()
        .setTitle('``🌙``︱Selfroles')
        .setDescription('> Wähle **deine** Selfroles um dich zu besschreiben')
        .setColor("#9dabb3")
        .setAuthor("Wähle deine Selfroles!", "https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
        .setImage("https://cdn.discordapp.com/attachments/1105475698514206740/1105838974066503791/Perso.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
        .setFooter("Viel Spaß!", "https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")

            let row = new discord.MessageActionRow()
              .addComponents(
                new discord.MessageSelectMenu()
                .setCustomId("Menu")
                .setPlaceholder("Klick auf mich!")
                .addOptions(
                    {
                        label:"Junge",
                        value:"Junge",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"Mädchen",
                        value:"Mädchen",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"Divers",
                        value:"Divers",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"12+",
                        value:"12+",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"14+",
                        value:"14+",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"16+",
                        value:"16+",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"18+",
                        value:"18+",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"PC",
                        value:"PC",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"Handy",
                        value:"Handy",
                        emoji:"<:special:1105853689199079514>📱"
                    },
                    {
                        label:"Konsole",
                        value:"Konsole",
                        emoji:"<:special:1105853689199079514>"
                    },
                    {
                        label:"Toaster",
                        value:"Toaster",
                        emoji:"🗿"
                    },
                )
                )

		await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        
    }else if (value === 'Junge') {
        if (interaction.member.roles.cache.some(role => role.id == a1)) {
            interaction.reply({content: "**Die Rolle ( ``👦🏽`` Junge ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a1)
        }
        else{
            interaction.member.roles.add(a1)
            await interaction.reply({ content: "**Die Rolle ( ``👦🏽`` Junge ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === 'Mädchen') {
        if (interaction.member.roles.cache.some(role => role.id == a2)) {
            interaction.reply({content: "**Die Rolle ( ``👧🏽`` Mädchen ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a2)
        }
        else{
            interaction.member.roles.add(a2)
            await interaction.reply({ content: "**Die Rolle ( ``👧🏽`` Mädchen ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === 'Divers') {
        if (interaction.member.roles.cache.some(role => role.id == a3)) {
            interaction.reply({content: "**Die Rolle ( ``✨`` Divers ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a3)
        }
        else{
            interaction.member.roles.add(a3)
            await interaction.reply({ content: "**Die Rolle ( ``✨`` Divers ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === '12+') {
        if (interaction.member.roles.cache.some(role => role.id == a4)) {
            interaction.reply({content: "**Die Rolle ( ``👶🏽`` 12+ ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a4)
        }
        else{
            interaction.member.roles.add(a4)
            await interaction.reply({ content: "**Die Rolle ( ``👶🏽`` 12+ ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === '14+') {
        if (interaction.member.roles.cache.some(role => role.id == a5)) {
            interaction.reply({content: "**Die Rolle ( ``👦🏽`` 14+ ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a5)
        }
        else{
            interaction.member.roles.add(a5)
            await interaction.reply({ content: "**Die Rolle ( ``14+`` 👦🏽 ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === '16+') {
        if (interaction.member.roles.cache.some(role => role.id == a6)) {
            interaction.reply({content: "**Die Rolle ( ``👨🏽`` 16+ ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a6)
        }
        else{
            interaction.member.roles.add(a6)
            await interaction.reply({ content: "**Die Rolle ( ``👨🏽`` 16+ ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === '18+') {
        if (interaction.member.roles.cache.some(role => role.id == a7)) {
            interaction.reply({content: "**Die Rolle ( ``🧓🏽`` 18+ ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a7)
        }
        else{
            interaction.member.roles.add(a7)
            await interaction.reply({ content: "**Die Rolle ( ``🧓🏽`` 18+ ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === 'PC') {
        if (interaction.member.roles.cache.some(role => role.id == a8)) {
            interaction.reply({content: "**Die Rolle ( ``💻`` PC ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a8)
        }
        else{
            interaction.member.roles.add(a8)
            await interaction.reply({ content: "**Die Rolle ( ``💻`` PC ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === 'Handy') {
        if (interaction.member.roles.cache.some(role => role.id == a9)) {
            interaction.reply({content: "**Die Rolle ( ``📱`` Handy ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a9)
        }
        else{
            interaction.member.roles.add(a9)
            await interaction.reply({ content: "**Die Rolle ( ``📱`` Handy ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === 'Konsole') {
        if (interaction.member.roles.cache.some(role => role.id == a10)) {
            interaction.reply({content: "**Die Rolle ( ``🎮`` Konsole ) wurde erfolgreich hinzugefügt**" , ephemeral: true})
            interaction.member.roles.remove(a10)
        }
        else{
            interaction.member.roles.add(a10)
            await interaction.reply({ content: "**Die Rolle ( ``🎮`` Konsole ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }else if (value === 'Toaster') {
        if (interaction.member.roles.cache.some(role => role.id == a11)) {
            interaction.reply({content: "**Die Rolle ( ``🗿`` Toaster ) wurde erfolgreich entfernt**" , ephemeral: true})
            interaction.member.roles.remove(a11)
        }
        else{
            interaction.member.roles.add(a11)
            await interaction.reply({ content: "**Die Rolle ( ``🗿`` Toaster ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
    }

});

client.on("interactionCreate",async(interaction)=>{
    if(interaction.isSelectMenu()){
      
        let choice = interaction.values[0] 
        const member = interaction.member
         if(choice === 'Neuig'){
            if (member.roles.cache.some(role => role.id == r1)) {
                interaction.reply({content: "**Die Rolle ( ``📢`` Neuigkeiten ) wurde erfolgreich entfernt**" , ephemeral: true})
                member.roles.remove(r1)
            }
            else{
            member.roles.add(r1)
                await interaction.reply({ content: "**Die Rolle ( ``📢`` Neuigkeiten ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
              }
    
    else if(choice === 'Umf'){
        if (member.roles.cache.some(role => role.id == r2)) {
            interaction.reply({content: "**Die Rolle ( ``❓`` Umfragen ) wurde erfolgreich entfernt**", ephemeral: true})
            member.roles.remove(r2)
        }
        else{
        member.roles.add(r2)
            await interaction.reply({ content: "**Die Rolle ( ``❓`` Umfragen ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
          }
    
    
          else if(choice === 'Gewinnspiel'){
            if (member.roles.cache.some(role => role.id == r3)) {
                interaction.reply({content: "**Die Rolle ( ``🎁`` Gewinnspiele ) wurde erfolgreich entfernt**", ephemeral: true})
                member.roles.remove(r3)
            }
            else{
            member.roles.add(r3)
                await interaction.reply({ content: "**Die ( ``🎁`` Gewinnspiele ) Rolle wurde erfolgreich hinzugefügt**", ephemeral: true })}
              }
    
    
    
              else if(choice === 'Sonst'){
                if (member.roles.cache.some(role => role.id == r4)) {
                    interaction.reply({content: "**Die Rolle ( ``✨`` Sonstieges ) wurde erfolgreich entfernt**", ephemeral: true})
                    member.roles.remove(r4)
                }
                else{
                member.roles.add(r4)
                    await interaction.reply({ content: "**Die Rolle ( ``✨`` Sonstieges ) wurde erfolgreich hinzugefügt**", ephemeral: true })}
                  }          
        }
})

client.on("messageCreate",async(message)=>{
    if(message.content.toLowerCase().startsWith(prefix+"regeln")){
        if(message.member.permissions.has("ADMINISTRATOR")){
            let embed = new discord.MessageEmbed()
            .setAuthor("Darkness Lounge︱Regeln","https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
            .setTitle("``🌙``︱Darkness Lounge Server Regeln")
            .setImage("https://cdn.discordapp.com/attachments/1105475698514206740/1106261272099569674/Regeln.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
            .setDescription("Hier stehen alle Regeln drinnen die ihr befolgen **müsst**")
            .setColor("#9dabb3")
            .addField("Allgeimeine Regeln","**__Rechtlinien__**: \n https://discord.com/terms\n**__Nutzerbiedinungen__**: https://discord.com/guidelines")
            .addField("Eine Weitere Sache","Ihr solltet selber wissen was erlaubt ist und was nicht, nutzt einfach euren normalen **Menschenverstand**")
            .setFooter("Danke fürs Lesen","https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")

            message.channel.send({embeds:[embed]})
        }else{
            message.reply("**Sorry dies kannst du nicht tun, aber schau doch einfach bei <#1105139465778897007> vorbei!**")
        }
    }
})

client.on("messageCreate",async(message)=>{
    if(message.content.toLowerCase().startsWith(prefix+"setup-verify")){
        if(message.member.permissions.has("ADMINISTRATOR")){
            let embed = new discord.MessageEmbed()
            .setAuthor("Darkness Lounge︱Regeln","https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
            .setTitle("``🌙``︱Darkness Lounge Server Regeln")
            .setImage("https://cdn.discordapp.com/attachments/1105475698514206740/1106261272099569674/Regeln.png")
            .setThumbnail("https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")
            .setDescription("Hier stehen alle Regeln drinnen die ihr befolgen **müsst**")
            .setColor("#9dabb3")
            .addField("Allgeimeine Regeln","**__Rechtlinien__**: \n https://discord.com/terms\n**__Nutzerbiedinungen__**: https://discord.com/guidelines")
            .addField("Eine Weitere Sache","Ihr solltet selber wissen was erlaubt ist und was nicht, nutzt einfach euren normalen **Menschenverstand**")
            .setFooter("Danke fürs Lesen","https://cdn.discordapp.com/attachments/1105475698514206740/1105521784486363176/Darkness_Lounge.png")

            let row = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                .setCustomId("verify")
                .setEmoji("<:peepoban:1105842344227512532>")
                .setLabel("Verifizieren")
                .setStyle("SECONDARY")
            )
            

            message.channel.send({embeds:[embed],components:[row]})
        }else{
            message.reply("**Sorry dies kannst du nicht tun**")
        }
    }
})

client.on("interactionCreate",async(interaction)=>{
    if(interaction.customId == "verify"){
        interaction.member.roles.add("1105134630706872415");
        interaction.reply({content:"**Willkommen auf den Server <:peepohappy:1105842332013690930>**", ephemeral:true})
    }
})

client.login(token).then(
    console.log("Erfolg")
)