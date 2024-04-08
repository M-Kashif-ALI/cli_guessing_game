import inquirer from "inquirer";

const randomNumber:number = 13;

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations, your guess is correct!");
} else {
  console.log(`Better luck next time. The correct number was ${randomNumber}.`);
}