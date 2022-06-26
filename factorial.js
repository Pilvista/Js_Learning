function factorial(n){
    let output =1;
    for( let i = 1; i <= n; i++){
        output = output * i;
    } 
    return output;
}
const result = factorial(0);
console.log(result);
