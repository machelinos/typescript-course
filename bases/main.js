"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (name) => {
        return name.length > 3 ? true : false;
    };
    const validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Whatever'));
//# sourceMappingURL=main.js.map