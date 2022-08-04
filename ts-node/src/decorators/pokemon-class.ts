function printToConsole( constructor: Function ) {
    console.log(constructor);
}


@printToConsole
export class Pokemon {
    public api = 'https://pokemonapi.com';

    constructor(
        public name: string
    ){}
}