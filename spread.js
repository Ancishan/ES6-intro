
// const max = Math.max(3, 2, 6 , 5 ,3, 1 )
// console.log(max)

// >>>>>>spread operator (...) 3 idiots dte hbe .This is called spread
const max = Math.max(3, 2, 6 , 5 ,3, 1 )
const numbers = [3,5,8,9,34,98,100];
const arraymax = Math.max(...numbers);
// console.log(arraymax);

// >>>>>--->>>>without dot dot dot the output of numbers will be array with number
console.log(...numbers)

// >>>>>>When  numbers dot dot dot then output  only numbers

const friends = [1,2,3,4,5];
const bondu = friends;
const dosto = [...friends]; //jemn ache tomon ei bose jabe
console.log(dosto);
friends.push(9)
console.log(friends)

const diya = [...friends, 9999]   // add extra elemnt while copy

console.log(diya);



