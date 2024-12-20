#!/usr/bin/env node

const { Command } = require("commander");
const { seedDataIntoDB, deleteDataFromDB } = require("./seed");

const program = new Command();

program
  .name("Auction CLI")
  .description("CLI tool to manage auction items in MongoDB")
  .version("1.0.0");

program
  .command("seed")
  .description("Seed data into MongoDB")
  .action(async () => {
    try {
      await seedDataIntoDB();
      console.log("Seed operation completed successfully");
    } catch (error) {
      console.error("Error during seed operation", error);
      process.exit(1);
    }
  });

program
  .command("delete")
  .description("Delete data from MongoDB")
  .action(async () => {
    try {
      await deleteDataFromDB();
      console.log("Delete operation completed successfully");
    } catch (error) {
      console.error("Error during delete operation", error);
      process.exit(1);
    }
  });

program.parse(process.argv);
