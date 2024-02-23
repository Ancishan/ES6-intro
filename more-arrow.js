const multiply = (first , second, third) => first * second * third;
const multi = multiply(3,5,2);
console.log(multi)

// >>>>>SINGLE PARAMETER<<<<<<<<\\\\\
const getAge = (person) => person.age;
const student = { name: 'shanto', age: 21}
const age = getAge(student)
console.log(age);

const getThird = (numbers) => numbers[2];
const number = [11,22,43,45,332,44]
const third = getThird(number)
// const third = getThird([5,9,8,7]);
console.log(third);


// >>>>>DOUBLE PARAMETER<<<<<<<<\\\\\
const doubleIt = num => num * 2;
const numberr = 2;
const double = doubleIt(numberr);
console.log(double)

// // >>>>>NO PARAMETER<<<<<<<<\\\\\

const getPI = () => Math.PI
console.log(getPI())

// Large arrow function .If you want to get anything returned from this fucntion k.then you have to use the return keyword  

const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}
console.log(doMath(2,3,4))