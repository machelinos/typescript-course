(()=>{
    const hello: string = 'Hello';

    function returnHello(): string{
        return hello;
    }

    const arrowfunc = (): string => {
        return ' This is an arrow function';
    }

    const greeting: string = returnHello();

    console.log(typeof(arrowfunc));
})();