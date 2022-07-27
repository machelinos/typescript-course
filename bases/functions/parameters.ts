(()=>{
    // we shoould type all parameters
    const concatNames = (firstname: string, lastName: string): string => {
        return `${firstname} ${lastName}`;
    };
    const fullName = concatNames('Marcel', 'Cabrera');
    console.log(fullName);

    // Optional parameters, will let us ommit param but it will be undefined
    const concatOptionalParams = (firstname: string, lastName?: string): string =>{
        return `${firstname} ${lastName}`;
    }
    const fullNameOptionalLastName = concatOptionalParams('Marcel');
    console.log(fullNameOptionalLastName);

    // Default parameters, will let us ommit param will use default value
    const concatDefaultParams = (firstname: string, lastName: string = 'Cabrera'): string =>{
        return `${firstname} ${lastName}`;
    }
    const fullNameDefaultLastName = concatDefaultParams('Marcel');
    console.log(fullNameDefaultLastName);


})();