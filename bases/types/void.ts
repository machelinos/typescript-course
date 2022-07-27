(()=>{
    function callBatman(): void{
        return;
    }

    const callSuperman = (): void => {
        // return 'error'; // => error in typescript Type 'string' is not assignable to type 'void'
    }

    // if the function doesnt return any value, the type of the return value is void
    const a = callBatman();
    const b = callSuperman();

    console.log(a, b);
})();