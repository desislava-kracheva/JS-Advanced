function solve(arr) {

    let mainDiag = 0;
    let secDiag = 0;

    for(let i = 0; i< arr.length; i++){

        mainDiag +=arr[i][i];
        secDiag+=arr[i][arr.length-i -1]

    }
    console.log(mainDiag,secDiag);

}
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)