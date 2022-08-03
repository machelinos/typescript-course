(()=>{
    interface XMen {
        name: string;
        realName: string;
        getFullName: ()=>string
    }

    class Person implements XMen {
        constructor(
            public name: string,
            public realName: string

        ){}

        getFullName(){
            return `${this.name} - ${this.realName}`;
        }
    }

    const natasha: Person = new Person('Black Widow','Natasha');

    console.log(natasha.getFullName());
})();