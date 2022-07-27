"use strict";
(() => {
    const concatRestParams = (firstname, ...restNames) => {
        return `${firstname} ${restNames.join(' ')}`;
    };
    const fullNameRestLastName = concatRestParams('Marcel', 'Aristides', 'Cabrera', 'Gomez');
    console.log(fullNameRestLastName);
})();
