(()=>{
    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) {

        }
    }
    // Cannot create an instance of an abstract class.
    // const wolverine = new Mutant('Wolverine', 'Logan')

    class XmenChar extends Mutant {}

    // we can create inctances of classes that extend our bastract class
    const wolverine: XmenChar = new XmenChar('Wolverine', 'Logan')

    console.log('abstaract', wolverine);
})();