1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5 //=> 2

// create an add function
function add(x , y){
    return x + y;
}
// create a subtract function
function subtract(x , y){
    return x - y;
}
// create a multiply function
function multiply(x , y){
    return x * y;
}
// create a divide function
function divide(x , y){
    return x / y;
}
// create an increment function
function increment(n){
    return ++n ;
}
// create a decrement function
function decrement(n){
    return --n;
}
// make a function that parses strings as integers
function makeInt(n){
    return parseInt(n , 10);
}
/* make a function that parses a number while retaining
the decimals as a floating point number*/
function preserveDecimal(n){
    return parseFloat(n);
}
