(()=>{
    interface addTwoNumbers {
        (a: number, b:number): number;
    }

    let addNumbersFunc: addTwoNumbers;
    addNumbersFunc = (a: number, b:number) => {
        return a+b;
    }

    console.log(addNumbersFunc(1,45));
})();