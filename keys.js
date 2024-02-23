const glass = {name: 'glass', color: 'red', price: 12 , isCleaned: true};
console.log(glass); // the output is { name: 'glass', colorL: 'red', price: 12, isCleaned: true }


//1. >>>> get properties name using "keys"
const keys = Object.keys(glass); //output will be [ 'name', 'colorL', 'price', 'isCleaned' ] shudu matro properties gula k pwr jnno
console.log(keys);

// 2.>>>>>>>>>get properties of object using values

const values = Object.values(glass); // output will be [ 'glass', 'red', 12, true ]
console.log(values);

// 3.>>>>>>>>> get properties and object using pair and entries. Its called array of array, two dimentional array

const pair = Object.entries(glass);
console.log(pair);  // the output will be
// The output will be
//  [
//     [ 'name', 'glass' ],
//     [ 'colorL', 'red' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

//4. properti theke 1 ta property remove
// delete glass.isCleaned;
// console.log(glass) //the output is== { name: 'glass', colorL: 'red', price: 12 }

//  5.using districting remove
const {name, ...shortglass} = glass;
console.log(shortglass); // the output is  { color: 'red', price: 12, isCleaned: true }

// 6.freeze means kono kichu add na kora

// Object.freeze(glass);
// glass.source = 'Bangladesh'; 
// console.log(glass); // the output is { name: 'glass', color: 'red', price: 12, isCleaned: true } add hoy mi

// when freez remove 
glass.source = 'Bangladesh'; 
glass.price= 5000;
delete glass.name;
console.log(glass); // The ouptut is { color: 'red', price: 5000, isCleaned: true, source: 'Bangladesh' }



