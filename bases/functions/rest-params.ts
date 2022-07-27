(()=>{
    const concatRestParams = (firstname: string, ...restNames: string[]): string =>{
        return `${firstname} ${restNames.join(' ')}`;
    }
    const fullNameRestLastName = concatRestParams('Marcel', 'Aristides','Cabrera', 'Gomez');
    console.log(fullNameRestLastName);
})();