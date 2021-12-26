function solve(num) {

    if (num == '') {
        num = 5;
    }


    for (let j = 1; j <= num; j++) {


        console.log('* '.repeat(num));
    }


}

solve(5)