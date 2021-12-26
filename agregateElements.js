function solve(arr){

    let sum = arr.reduce((a,b) => a+b);
    console.log(sum);
let sumInversed =0;
    for(let line of arr){

sumInversed+= 1/line;

    }
console.log(sumInversed);
let concat = '';
for(let line of arr){

concat+= line;
}

console.log(concat);
}
solve([2, 4, 8, 16])