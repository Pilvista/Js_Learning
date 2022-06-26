/*function factorial(n){
    let i = 1;
    let output = 1;
    while(i <= n){
        output = output * i;
        i++;
    }
    return output;
}
const result = factorial(5);
console.log(result);*/
function factorial(n){
    let i = n;
    let output = i;
    while(i >= 1){
        output = output * i;
        i--;
    }
    return output;
}
const result = factorial(5);
console.log(result);
