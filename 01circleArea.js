function solve(arg){
if(typeof(arg) == 'number'){
    console.log((Math.pow(arg,2)* Math.PI).toFixed(2));

} else if(typeof(arg) !== 'number') {
    console.log(`We can not calculate the circle area, because we receive a ${typeof(arg)}.`);
}

}
solve(5)
solve('name')