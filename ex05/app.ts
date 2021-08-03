function addAndPrint (num1:number, num2:number, print: (msg:string) => void) {
    let result= num1 + num2;

    print(`${num1} + ${num2} is ${result}`);
}

addAndPrint(3, 5, (msg) => {
    console.log(msg);
});
