function solve(arr){

    let newArr = []
for(let i = 0; i< arr.length; i++){

if(i % 2 != 0 ){
newArr.push(arr[i]);

}

}

const result = newArr.map(x => x*2).reverse();

return result;

}
