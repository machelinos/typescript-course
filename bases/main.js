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
    let addNumbersFunc;
    addNumbersFunc = (a, b) => {
        return a + b;
    };
    console.log(addNumbersFunc(1, 45));
})();
//# sourceMappingURL=main.js.map