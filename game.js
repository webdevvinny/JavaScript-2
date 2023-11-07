
import {name , age } from './index.js';


const prompt = require("prompt-sync")();

/*
let random = Math.floor(Math.random()* 10);

let geuss = 0;

while(true){
        let numberGeussed = prompt("Enter a number between 0 and 10? ");
        if(numberGeussed == random){
            console.log("You have won the game!!!");
            console.log("It took you ", geuss , "Geusses to win!!");
            break;
        }
        else if(numberGeussed < random){
            console.log("OOOps!!!!!!!! you got it wrong. You geussed too low Try again!!");
            geuss++;
        }
        else if(numberGeussed > random){
            console.log("OOOps!!!!!!!! you got it wrong. You geussed too high Try again!!");
            geuss++;
        }
}
*/

const names = {
    name1: "John",
    name2: "Peter",
    name3: "Moses"
}

let{name1, name2, name3} = names;

console.log(name1);
console.log(names.name1);

console.log("Your name is: ", name , " and you are ", age , " years old!!!");
