const numbers = [1,23,4,5];
for(const num of numbers){
    // console.log(num);
}
// 
const name = 'shantopede';
for(const char of name){
    // console.log(char);
}

const glass = {name: 'glass', color: 'red', price: 12 , isCleaned: true};
// >>>> this loop showing error

// for(const key of  glass){
//     console.log(key)
// }

// this loop of changing in

for(const key in glass){
    console.log(key) // this output is name   (color  price  isCleaned)
}

// when i want properties with values

for(const key in glass){
    const value = glass[key];
    console.log(key,value)
    // the output is name glass
    // color red
    // price 12
    // isCleaned true
}
  