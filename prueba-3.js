const arr1 = [3, 6, -2, -5, 7, 3];
const arr2 = [-1, -2];
const arr3 = [9, 5, 10, 2, 24, -1, -48];
const arr4 = [-23, 4, -3, 8, -12]

function solution(inputArr) {
    /* Solución 1 */
    // newArr = []
    // for(let i = 0; i < inputArr.length - 1; i++) {
    //     arrG = inputArr[i] * inputArr[i + 1]
    //     newArr.push(arrG);
    // }
    // const mayor = Math.max(...newArr);
    // console.log(mayor);

    /* Solución 2 */
    prod = inputArr[0] * inputArr[1];
    for (let i = 0; i < inputArr.length - 1; i++) {
        prod = Math.max(prod,inputArr[i] * inputArr[i + 1]);
    }
    console.log(prod);
}

solution(arr1);