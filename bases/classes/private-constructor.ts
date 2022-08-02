(()=>{
    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor(
            public name: string
        ){
        }

        static callApocalipsis(){
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Im Apocalypto');
            }

            return Apocalipsis.instance;
        }

        public setName(name:string){
            this.name = name;
        }

    }

    // Constructor of class 'Apocalipsis' is private and only accessible within the class declaration
    // const apocalipsis = new Apocalipsis('Soy apocalipto!');

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsisNew = Apocalipsis.callApocalipsis();

    apocalipsisNew.setName('im other apocalyptos');

    console.log(apocalipsis, apocalipsisNew);
})()