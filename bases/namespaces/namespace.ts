namespace Validations {
    export const validateText = (name: string): boolean => {
        return name.length > 3 ? true : false;
    }

    const validateDate = (myDate: Date): boolean => {
        return isNaN(myDate.valueOf()) ? false : true;
    }
}

console.log(Validations.validateText('Whatever'));