"use strict";
(() => {
    let a = 10;
    const sayHello = (msg) => {
        console.log(msg);
    };
    sayHello('Hello world!!!!!');
})();
(() => {
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    console.log(unirheroes('Flash', 'Superman'));
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(() => {
    const hello = 'Hello';
    function returnHello() {
        return hello;
    }
    const arrowfunc = () => {
        return ' This is an arrow function';
    };
    const greeting = returnHello();
    console.log(typeof (arrowfunc));
})();
(() => {
    const concatNames = (firstname, lastName) => {
        return `${firstname} ${lastName}`;
    };
    const fullName = concatNames('Marcel', 'Cabrera');
    console.log(fullName);
    const concatOptionalParams = (firstname, lastName) => {
        return `${firstname} ${lastName}`;
    };
    const fullNameOptionalLastName = concatOptionalParams('Marcel');
    console.log(fullNameOptionalLastName);
    const concatDefaultParams = (firstname, lastName = 'Cabrera') => {
        return `${firstname} ${lastName}`;
    };
    const fullNameDefaultLastName = concatDefaultParams('Marcel');
    console.log(fullNameDefaultLastName);
})();
(() => {
    const concatRestParams = (firstname, ...restNames) => {
        return `${firstname} ${restNames.join(' ')}`;
    };
    const fullNameRestLastName = concatRestParams('Marcel', 'Aristides', 'Cabrera', 'Gomez');
    console.log(fullNameRestLastName);
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let hero = {
        name: 'Superman',
        age: 25,
        powers: ['Super strength', 'Ray x vision']
    };
    hero = {
        name: 'whatever'
    };
    console.log(hero);
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
    let myCustomVar = 'Bruce';
    console.log(typeof (myCustomVar));
    myCustomVar = 35;
    console.log(typeof (myCustomVar));
    myCustomVar = {
        name: 'Clark Kent',
        age: 42,
        powers: [1, 2, 3]
    };
    console.log(typeof (myCustomVar));
})();
(() => {
    let avenger = 123;
    let villain;
    let heroe;
    avenger = 'Spiderman';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(1));
    avenger = 132.2312312;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(1));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.forEach(number => {
        console.log(number.toString());
    });
    console.log(numbers);
})();
(() => {
    let isSuperman = false;
    let isBatman = true;
    isSuperman = isBatman ? false : true;
    console.log({ isSuperman });
})();
(() => {
    let VolumeLevels;
    (function (VolumeLevels) {
        VolumeLevels[VolumeLevels["min"] = 2] = "min";
        VolumeLevels[VolumeLevels["medium"] = 3] = "medium";
        VolumeLevels[VolumeLevels["max"] = 10] = "max";
    })(VolumeLevels || (VolumeLevels = {}));
    const volume = VolumeLevels.medium;
    console.log(volume);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let NivelFuerza;
    (function (NivelFuerza) {
        NivelFuerza[NivelFuerza["acuaman"] = 0] = "acuaman";
        NivelFuerza[NivelFuerza["batman"] = 1] = "batman";
        NivelFuerza[NivelFuerza["flash"] = 5] = "flash";
        NivelFuerza[NivelFuerza["superman"] = 100] = "superman";
    })(NivelFuerza || (NivelFuerza = {}));
    const fuerzaFlash = NivelFuerza.flash;
    const fuerzaSuperman = NivelFuerza.superman;
    const fuerzaBatman = NivelFuerza.batman;
    const fuerzaAcuaman = NivelFuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const errorFunc = (message) => {
        throw new Error(message);
    };
    errorFunc('This went sideways');
    console.log('Hi!');
})();
(() => {
    let avengers = 10;
    let villains = 20;
    avengers = 30;
    avengers = Number('15');
    if (avengers < villains) {
        console.log('We are doomed');
    }
    else {
        console.log('Victory!');
    }
})();
(() => {
    var _a;
    const batman = 'Batman';
    const greenLantern = 'Green Lantern';
    console.log("I'm " + batman);
    console.log(batman.toUpperCase());
    console.log((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
(() => {
    const hero = ['Dr. Strange', 42];
    console.log({ hero });
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    const b = callSuperman();
    console.log(a, b);
})();
//# sourceMappingURL=main.js.map