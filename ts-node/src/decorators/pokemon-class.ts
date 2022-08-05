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

const blockPrototype = function(constructor: Function){
    Object.seal( constructor);
    Object.seal( constructor.prototype);
}

const validatePokemonId = ( ):Function =>{
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor)=>{
        const originalFunc = descriptor.value;
        descriptor.value = (id: number)=>{
            if(id<0 || id>800){
                return console.error('Id must be greater than 0 and less than 800');
            } else {
                return originalFunc(id);
            }
        }
    }
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
    public api = 'https://pokemonapi.com';

    constructor(
        public name: string
    ){}
    
    @validatePokemonId()
    savePokemonToDB(id: number){
        console.log(`Pokemon saved to database ${id}`);
    }
}