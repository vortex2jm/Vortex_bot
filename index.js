const {Client, Intents} = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ]
});

client.on('ready', ()=>{

  let vortexStatus = `!help`;
  client.user.setActivity(`${vortexStatus}`,{type: 'LISTENING'});
  console.log('VORTEX ON!');
})



// client.on('messageCreate', (message)=>{

//   if(message.author.bot) return;

//   if(message.content == `<@${client.user.id}>`){

//     message.channel.send(`Olá ${message.author}, veja meus comandos com !help`);
//   }
// })

// client.on('messageCreate', (message)=>{

//   if(message.author.bot)return

//   if(message.content === '!ping'){

//     message.channel.send('```' + `My ping is ${client.ws.ping}ms` + '```');
//   }
// })


client.on("interactionCreate", async interaction => {

  if(!interaction.isCommand()) return;

  const command = interaction;

  if(command === 'teste'){

    await interaction.reply('teste realizado com sucesso');
  }

  else if(command === 'info'){

    await interaction.reply(`Nome do servidor: ${interaction.guild.name}\n
    Quantidade de membros: ${interaction.guild.memberCount}`);
  }

})


client.login(process.env.TOKEN);