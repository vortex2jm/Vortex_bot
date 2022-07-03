const {SlashCommandBuilder} = require('@discordjs/builders');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const dotenv = require('dotenv');

dotenv.config();

const commands = [new SlashCommandBuilder().setName('teste').setDescription('Comando teste')]
    .map(command => command.toJSON());

const rest = new REST({version: '9'}).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {body: commands})
    .then(()=> {console.log("Sucefully registered application commands")})
    .catch(console.error)