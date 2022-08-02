(()=>{
    class Avenger {
        // Properties can be: private, public or static
        // private properties can only be accessed inside the Class
        private name: string;

        // ublic properties are accesible even outside the Class
        public team: string;
        public realName?: string;
        
        // Static properties can be accesed outside the class but only from the Class name itself, not in the instantiated object
        static avgAge: number = 35;
    
        constructor(name: string, team: string, realName?: string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    
    }

    const antman: Avenger = new Avenger('Antman','Captain');

    // Static properties can be accessed from the class even outside the class
    // Avenger.avgAge has acces to thje static property
    // antman.avgAge this shows error, static property can not be accessed from instantiated object

    // We can declare the class in a short wat through the constructor
    class AvengerShort {
        static avgAge: number = 35;
        static getAvgAge(){
            return this.avgAge;
        }

        constructor(
            private name: string,
            public team: string,
            public realName?: string
        ){}

        public getName(){
            return `${this.name} - ${this.team}`;
        }
    }

    const batman: AvengerShort = new AvengerShort('Batman','DC','Bruce Wayne');

    console.log(batman);
    console.log(AvengerShort.avgAge);
    console.log(batman.getName());
    console.log(AvengerShort.getAvgAge());
    

})();