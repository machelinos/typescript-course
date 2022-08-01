"use strict";
(() => {
    // TS auto assigns the type when not specified
    /*     {
            name: string;
            age: number;
            powers: string[];
         }*/
    let hero = {
        name: 'Superman',
        age: 25,
        powers: ['Super strength', 'Ray x vision']
    };
    // this throws an error in ts linter but it compiles to correct js, it will overwrite all properties in the hero object
    hero = {
        name: 'whatever'
    };
    console.log(hero); // => { name: 'whatever'}
    // we can define the object type with its properties easily
    let otherHero = {
        name: 'Flash',
        age: 27,
        powers: ['Super speed', 'nothing else'],
        getName() {
            return this.name;
        }
    };
    const batman = {
        name: 'Bruce Wayne',
        age: 35,
        powers: [1, 5],
        getName() {
            return this.name;
        }
    };
    // Multiples types can be referenced in the same variable
    let myCustomVar = 'Bruce';
    console.log(typeof (myCustomVar)); // => string
    myCustomVar = 35;
    console.log(typeof (myCustomVar)); // => number
    myCustomVar = {
        name: 'Clark Kent',
        age: 42,
        powers: [1, 2, 3]
    };
    console.log(typeof (myCustomVar));
})();
