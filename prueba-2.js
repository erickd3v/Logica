// const numero = 5;
// let newNumber = [];

// for (let i = 1; i <= numero; i++) {
//     const element = i;
//     newNumber.push(element);
    
// }

// for (let i = 0; i < newNumber.length; i++) {
//     const element2 = newNumber[i] * i;
//     console.log(element2);
// }

// // ouput: 1, 2, 6, 24, 120

const numero = 6;
let newNumber = [];
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    newNumber.push(factorial);
    factorial *= i;
}

console.log(newNumber);
