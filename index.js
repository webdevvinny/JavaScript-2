//import {na} from "./game.js";

const people = [
    {
        name: "John",
        age: 23,
        occupation: "Web Developer"
    },
    {
        name: "Vincent",
        age: 24,
        occupation: "Data Scientist"
    },
    {
        name: "Paul",
        age: 21,
        occupation: "Software Enginner"
    }
]

people.map((people) => {return people.name}).forEach(n => console.log(n));

//console.log(names);

let num = [4, 3, 2, 8, 1]

console.log(num.filter((value)=> value > 3));
console.log(num.reduce((value = 0, num)=> value + num));
console.log(num.sort((b, a)=> a - b));
console.log(people.map((people) => {return people.name}).sort().reverse());
console.log(people.map((people) => {return people.name}).sort((b, a)=> a.length - b.length));
let peo = people.map((people) => {return people.name})

peo.forEach(
    (value)=>{
        console.log(
            value[0].toLowerCase() + value.slice(1)
        );
    }
)

console.log(peo.splice(1));

const name = 'Jesse';
const age = 23;


export  {name, age};