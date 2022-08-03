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
//# sourceMappingURL=main.js.map