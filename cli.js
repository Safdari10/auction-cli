const Command = require('commander');
const { seeDataIntoDB, deleteDataFromDB } = require("./seed") 

const program = new Command();

program
    .name( "Auction CLI" )
    .description( "CLI tool to manage auction items in MongoDB" )
    .version( "1.0.0" )

program
    .command( "seed" )
    .description( "Seed data into MongoDB" )
    .action(async () => {
        try {
            await seeDataIntoDB()
            console.log("Seed operation completed successfully")
        } catch (error) {
            console.error("Error during seed operation", error)
        } 
    })

    