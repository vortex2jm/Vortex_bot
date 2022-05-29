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

  let vortexStatus = `Peça ajuda com !help`;

  client.user.setActivity(`${vortexStatus}`,{type: 'WATCHING'});
  
  console.log('VORTEX ON!');
})

client.on('messageCreate', (message)=>{

  if(message.author.bot) return;

  if(message.content == `<@${client.user.id}>`){

    message.channel.send(`Olá ${message.author}, veja meus comandos com !help`);
  }
})

client.on('messageCreate', (message)=>{

  if(message.author.bot)return

  if(message.content === '!ping'){

    message.channel.send('```' + `My ping is ${client.ws.ping}ms` + '```');
  }
})

client.login(process.env.TOKEN);