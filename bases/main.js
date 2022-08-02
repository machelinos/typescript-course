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
(() => {
    class AvengerExtend {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('avenger constructor called');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    const blackWidow = new AvengerExtend('Black Widow', 'Natasha');
    class XMen extends AvengerExtend {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullNameFromXmen() {
            return this.getFullName();
        }
    }
    const wolverine = new XMen('Wolverine', 'Logan', true);
    console.log(wolverine.getFullNameFromXmen());
})();
//# sourceMappingURL=main.js.map