function printToConsole( constructor: Function ) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function=>{
    if(print){
        return printToConsole;
    } else{
        return ()=>{}
    }
}


@printToConsoleConditional(false)
export class Pokemon {
    public api = 'https://pokemonapi.com';

    constructor(
        public name: string
    ){}
}