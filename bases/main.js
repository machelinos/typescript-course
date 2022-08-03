"use strict";
(() => {
    const batman = {
        name: 'Batman',
        age: 45,
        power: 'Being darks',
        address: {
            street: 'Cornelia Street',
            number: 123,
            city: 'NY'
        },
        getName() {
            return this.name;
        }
    };
    console.log(batman);
})();
(() => {
    class Person {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} - ${this.realName}`;
        }
    }
    const natasha = new Person('Black Widow', 'Natasha');
    console.log(natasha.getFullName());
})();
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        constructor(nombre, edad, sexo, estadoCivil) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log();
        }
    }
})();
(() => {
    let addNumbersFunc;
    addNumbersFunc = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunc(1, 45));
})();
//# sourceMappingURL=main.js.map