#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.yellowBright.bold(`\t\t\t\t\tCURRENCY CONVERTER`))

const currency : any = {
    USD: 1, // base currency
    EUR: 0.91,
    PKR: 280,
    INR: 74.57,
    SAR: 3.75
};

let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message: (chalk.bold.magentaBright("\nSelect main currency: ")),
            choices: ["USD","EUR","PKR","SAR","INR"] 
        },
        {
            name: "to",
            type: "list",
            message: (chalk.bold.magentaBright("\nSelect converting currency: ")),
            choices: ["USD","EUR","PKR","SAR","INR"]
        },
        {
            name: "amount",
            type: "number",
            message: (chalk.bold.cyanBright("\nEnter amount: "))
        }
    ]
);

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount 
let convertedAmount = baseAmount * toAmount 
// console.log(fromAmount)
// console.log(toAmount)
// console.log(amount)
// console.log(convertedAmount) 
console.log(chalk.bold.greenBright(`\nYour ${amount} ${userAnswer.from} in ${userAnswer.to} is ${convertedAmount}.`));
console.log(chalk.bold.yellowBright(`\nThanks for using!`));
