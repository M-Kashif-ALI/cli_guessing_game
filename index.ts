import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1 to 6.",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulations, your guess is correct!");
} else {
  console.log(`Better luck next time. The correct number was ${randomNumber}.`);
}