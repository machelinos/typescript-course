(()=>{
    class AvengerExtend {
        constructor(
            public name: string,
            public realName: string
        ){
            console.log('avenger constructor called');
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }

    const blackWidow: AvengerExtend = new AvengerExtend('Black Widow', 'Natasha')


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