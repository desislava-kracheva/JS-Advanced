function solve(num){

   let length = num.toString().length;


   if(num.toString()[0].repeat(length) == num){
       console.log(true);
   } else {
       console.log(false);
   }

   let str = num.toString();
   let sum = 0;
   for(let line of str){

    sum += Number(line);
   }

   console.log(sum);

}
solve(2222222)