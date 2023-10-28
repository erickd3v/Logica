const arr1 = [6, 2, 3, 8];  // ouput: 3
const arr2 = [0, 3];  // ouput: 2
const arr3 = [5, 4, 6]; // ouput: 0
const arr4 = [1, 3, 4]; // ouput: 1
const arr5 = [1]; // ouput: 0

function solution(statues) {
    // const numerosOrdenados = statues.sort((a,b) => a -b )
    const numM = statues.length + 1
    const range = Array.from({ length: numM },(_, i) => i + 1);

    const faltantes = range.filter(number => !statues.includes(number));
    console.log(faltantes);

    // console.log(numerosOrdenados.slice(' '));
}

console.log('arr1: ouput = 3');
solution(arr1) // 4
console.log('arr2 ouput = 2:');
solution(arr2) // 1
console.log('arr3: ouput = 0');
solution(arr3) // 0
console.log('arr4:ouput = 1');
solution(arr4) // 1
console.log('arr5:ouput = 0');
solution(arr5) // 0