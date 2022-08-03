(()=>{
    interface Hero {
        name: string;
        age: number;
        address: Address;
        power: string;
        getName: ()=>string
    }

    interface Address {
        street: string;
        number: number;
        city: string;
    }

    const batman: Hero = {
        name: 'Batman',
        age: 45,
        power: 'Being darks',
        address: {
            street: 'Cornelia Street',
            number: 123,
            city: 'NY'
        },
        getName(){
           return this.name;
        }
    }

    console.log(batman);
})();