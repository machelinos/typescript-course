"use strict";
(() => {
    const hello = 'Hello';
    function returnHello() {
        return hello;
    }
    const arrowfunc = () => {
        return ' This is an arrow function';
    };
    const greeting = returnHello();
    console.log(typeof (arrowfunc));
})();
