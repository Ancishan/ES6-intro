const  actor = {
    name : 'Ananta',
    age : 30,
    phone: '01234556553',
    money: 12345566
}
// const phone = actor.phone;

// >>>>>> if right side is an object left side of destructuring will be object as well
// >>>>>>>> use property name as a variable that contains the property value
const {money, phone: mobile} = actor;

// this is object  distructuring part


console.log(mobile);
console.log(money);

// array distructing part

const numberss = [2,54]
const [a,b] = numberss;
const num = [a,b]
console.log(num)

// 

function doubleThem(a,b){
    return [a*2 , b*2];
}
console.log(doubleThem(2,3))  // this output is an array [4,6]
const [prothom ,second] = doubleThem(6,4);
console.log(prothom ,second); // this output is 12,8 .without array
