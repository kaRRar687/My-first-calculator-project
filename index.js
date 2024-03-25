#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first Number", type: "number", name: "firstNumber" },
    { message: "Enter your second Number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform the Action",
        type: "list",
        name: "operator",
        choices: ["+", "-", "/", "*"],
    },
]);
//conditional statement
if (answer.operator === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else {
    console.log("please type a valid number");
}
