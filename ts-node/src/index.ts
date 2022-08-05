import { Hero } from "./classes/Hero";
// we can use an alias to name the import something different in this file
import { Villain as Superbad } from "./classes/Villain";

// we can import all the exports from a file with and alias
import * as MultipleClasses from "./classes/Multiples";

// we can import default exports (not named) with any name we want
import whatever from "./data/powers";

import { genericFunction, genericFunctionArrow } from "./generics/generics";

// we can group imoprts from same folder
import { HeroInterface, VillainInterface } from './interfaces';
import { getPokemon } from "./generics/getPokemon";
import { Pokemon } from "./decorators/pokemon-class";

const batman : Hero = new Hero('Batman', 2, 35);

const drHorrible: Superbad = new Superbad('Dr. Horrible', 'Phd in horribleness', 25);

const multiple2: MultipleClasses.Multiple2 = new MultipleClasses.Multiple2();

console.log(batman);
console.log(drHorrible);
console.log(multiple2);
console.log(whatever);

console.log(batman.power);


// Generics
console.log(genericFunction(123));
console.log(genericFunctionArrow('Hola Mundo'));

const deadpool: VillainInterface = {
    name: 'Deadpool',
    dangerLevel: 3
}

console.log(genericFunction(deadpool));


// Generic with http requests
getPokemon(54)
    .then(resp=>{
        console.log(resp);
    }).catch(e=>{
        console.log(e);
    }).finally(()=>{
        console.log('Finished getting pokemon');
    })


// Using decorators
const psyduck = new Pokemon('Psyduck');
// error beacuse we defined pokemon as not extensible in our blockprototype decorator
//  (Pokemon.prototype as any).whatever = 'yea right';
psyduck.savePokemonToDB(54);