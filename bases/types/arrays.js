"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    // You just can add elements of type number into the numbers array, another type will de marked as error in ts
    // numbers.push('Wjatever') // => error
    // if we loop through the array, intellisense will recognize the type of each array's element
    numbers.forEach(number => {
        console.log(number.toString());
    });
    console.log(numbers);
})();
