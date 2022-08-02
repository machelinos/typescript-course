"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Captain');
    class AvengerShort {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.avgAge;
        }
        getName() {
            return `${this.name} - ${this.team}`;
        }
    }
    AvengerShort.avgAge = 35;
    const batman = new AvengerShort('Batman', 'DC', 'Bruce Wayne');
    console.log(batman);
    console.log(AvengerShort.avgAge);
    console.log(batman.getName());
    console.log(AvengerShort.getAvgAge());
})();
//# sourceMappingURL=main.js.map