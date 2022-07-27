(()=>{
    let avenger: any = 123;
    let villain;
    let heroe;

    // We should try to avoid using any in our programs
    avenger = 'Spiderman';

    console.log(avenger.charAt(0));

    // we can cast any to use it as a type (to get intellisense help)
    console.log((avenger as string).charAt(1));

    avenger = 132.2312312;
    console.log(avenger.toFixed(2));

    // another type of casting
    console.log((<number>avenger).toFixed(1));

})();