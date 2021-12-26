function solve(fruit, weight, kilogram){

let price = (kilogram * weight)/ 1000

let weigtInKG = weight/1000;

console.log(`I need $${price.toFixed(2)} to buy ${weigtInKG.toFixed(2)} kilograms ${fruit}.`);


}

solve('orange', 2500, 1.80)