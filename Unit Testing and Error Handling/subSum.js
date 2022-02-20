function solve(arr, startIndex, endIndex){
if(Array.isArray(arr) == false){
    return NaN;
}
if(startIndex < 0) {
    startIndex = 0;
}
if(endIndex > arr.length - 1){
    endIndex = arr.length -1;
}

return arr
.slice(startIndex, endIndex+1)
.map(Number)
.reduce((acc,x) => acc + x,0) 

}

console.log(solve([10, 'twenty', 30, 40], 0, 2))