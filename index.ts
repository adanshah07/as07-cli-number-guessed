#! /usr/bin/env node
import inquirer from "inquirer";
const randomValue = Math.floor(Math.random() * 100 + 1);

console.log("Welcome In Number guessing Game");
const answer = await inquirer.prompt([
  {
    name: "UserGuessedNumber",
    type: "number",
    message: "Guess A Number Between 1 to 100",
  },
]);
if (answer.UserGuessedNumber === randomValue) {
  console.log("Congrats! Your Guessed Number Is Right");
} else {
  console.log("Try Again");
}
