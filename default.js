// if value is not provided ,take this as a default.
function add( num1 = 10, num2 =20){
     result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
// const sum = add(5,7);
// output will be 5 and 7 ,sum is 12

const sum = add( );
// output will be 10 and 20 ,sum is 30