// нерешена

function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   const bestP = document.querySelector('#best>p')

   function onClick() {
      let arr = JSON.parse(input.value);

      let restaurants = {};

      arr.forEach((line) => {
         const tokens = line.split(' - ');
         const name = tokens[0];
         const workersArr = tokens[1].split(', ');



         let workers = [];

         for (let worker of workersArr) {

            let workerTokens = worker.split(' ');

            const salary = Number(workerTokens[1])
            workers.push({

               name: workerTokens[0], salary})

   }
  
   if(restaurants[name]){
      workers = workers.concat(restaurants[name].workers);
      
   }
   workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
   const bestSalary = workers[0].salary;
   const  averageSalary = workers
                         .reduce((sum,worker) => sum + worker.salary , 0) / workers.length;

 restaurants[name] = {
    workers,
   averageSalary,
    bestSalary
    }
   
   
    console.log(restaurants);

let bestRestaurantSalary = 0;
let best = undefined;


for(const name in restaurants){

  if(restaurants[name].averageSalary > bestSalary) {
best = {
name,
workers:restaurants[name].workers,
bestSalary : restaurants[name].bestSalary,
averageSalary: restaurants[name].averageSalary

}

bestRestaurantSalary = restaurants[name].averageSalary;

bestP.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)}
 Best Salary: ${best.bestSalary.toFixed(2)}`



  }
}








});
      
   }
}