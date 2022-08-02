(()=>{
    class AvengerExtend {
        constructor(
            public name: string,
            public realName: string
        ){
            console.log('avenger constructor called');
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }

        set fullName(name: string){
            if(name.length < 4){
                throw new Error('Name must be at least 3 characters');
            }

            this.name = name;
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    const blackWidow: AvengerExtend = new AvengerExtend('Black Widow', 'Natasha')

    console.log(blackWidow.fullName);
    blackWidow.fullName = 'Natasha';
    console.log(blackWidow.fullName);


    class XMen extends AvengerExtend {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
        }
        

        getFullNameFromXmen(){
            return this.getFullName();
        }
    }

    const wolverine: XMen = new XMen('Wolverine','Logan', true);

    console.log(wolverine.getFullNameFromXmen());
})();