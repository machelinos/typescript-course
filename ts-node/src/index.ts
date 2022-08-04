import { Hero } from "./classes/Hero";
// we can use an alias to name the import something different in this file
import { Villain as Superbad } from "./classes/Villain";

// we can import all the exports from a file with and alias
import * as MultipleClasses from "./classes/Multiples";

// we can import default exports (not named) with any name we want
import whatever from "./data/powers";

const batman : Hero = new Hero('Batman', 2, 35);

const drHorrible: Superbad = new Superbad('Dr. Horrible', 'Phd in horribleness', 25);

const multiple2: MultipleClasses.Multiple2 = new MultipleClasses.Multiple2();

console.log(batman);
console.log(drHorrible);
console.log(multiple2);
console.log(whatever);

console.log(batman.power);
