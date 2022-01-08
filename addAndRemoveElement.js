function solve(input){

    let command;
    let num = 0;
    let arr = [];
    while(input.length){
        num++;
         command = input.shift();
    switch(command){
    
    case 'add': 
    arr.push(num);
    break;
    
    case 'remove':arr.pop();
        break; 
    
    
    }
    
    
    
    }
    
    if(arr.length) {
    
        return arr.join('\n');
    
    }
    else{ 
        return 'Empty'
    
    }
    }
    

    console.log(solve(['add', 
    'add', 
    'remove', 
    'add', 
    'add']
    ));