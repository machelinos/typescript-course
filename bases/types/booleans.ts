(()=>{

    let isSuperman: boolean = false;
    let isBatman: boolean = true;

    isSuperman = isBatman ? false : true;

    // Can't assign any other vañue other than true or false to boolean type
    // this examlpes will give a type error in ts
    //isSuperman = 'true';

    console.log({isSuperman});
})();