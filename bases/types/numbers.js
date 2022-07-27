"use strict";
(() => {
    let avengers = 10;
    let villains = 20;
    avengers = 30;
    avengers = Number('15');
    // NaN type is number, so typescript won't show an error when asigning NaN to a number type variable
    // avengers = Number('124QA'); // result Nan
    if (avengers < villains) {
        console.log('We are doomed');
    }
    else {
        console.log('Victory!');
    }
})();
