const Command = require('commander');
const { seeDataIntoDB, deleteDataFromDB } = require("./seed") 

const program = new Command();

program
    .name( "Auction CLI" )
    .description( "CLI tool to manage auction items in MongoDB" )
    .version( "1.0.0" )
