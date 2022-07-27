"use strict";
(() => {
    const hero = ['Dr. Strange', 42];
    // with tuples we are specifying the type in each of the arrays indexes
    // we cannot change the value at index to other type than specified
    // hero[0] = 123; // => error Type 'number' is not assignable to type 'string'
    console.log({ hero });
})();
