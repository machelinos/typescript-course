"use strict";
(() => {
    const errorFunc = (message) => {
        // functions that give output of never must break at an error 
        throw new Error(message);
    };
    errorFunc('This went sideways');
    // This code is not going to execute
    console.log('Hi!');
})();
