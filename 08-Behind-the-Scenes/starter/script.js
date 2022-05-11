'use strict';

// // console.log(this);

// const calcAge = function(birthYear){
//   console.log(2037 - birthYear);
//   console.log(this);
// }

// // calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// }

// calcAgeArrow(1991)

// const jonas = {
//   year: 1999,
//   calcAge: function(){
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };

// jonas.calcAge()

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge()
// console.log(matilda.calcAge());

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991 ,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);

//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   }
// };

// jonas.greet();
// jonas.calcAge();


// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('after marriage:', marriedJessica);


// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before marriage:', jessica2);
console.log('after marriage:', jessicaCopy);