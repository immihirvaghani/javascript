"use strict";

// const cutPieces = function (fruit){
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges){

//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces } oranges.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 3))

// const calcAge = function(year){
//     return 2022 - year;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {

//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else{
//         return -1;
//     }
//     // return
// }

// console.log(yearsUntilRetirement(1999, 'Mihir'));

// Challenge 1
// const calcAverage = (round1, round2, round3) => {
//     return (round1 + round2 + round3) / 3;
// }

// const avgDolphins = calcAverage(85, 54, 41);
// console.log(avgDolphins);
// const avgKoalas = calcAverage(23, 34, 27);
// console.log(avgKoalas);

// const checkWinner = () => {
//     if(avgDolphins >= avgKoalas *2){
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}.`)
//     } else if(avgKoalas >= avgDolphins *2){
//         console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}.`)
//     } else{
//         console.log(`it's draw`)
//     }
// }

// checkWinner(avgDolphins, avgKoalas)

// Challenge 2
// let tipAmount;

// const bills = [125, 555, 44];
// let tips = [];

// const calcTip = (billsAmount) => {
//     if(billsAmount >= 50 && billsAmount <= 300){
//         return tipAmount = billsAmount * 15 / 100;
//     } else {
//         return tipAmount = billsAmount * 20 / 100;
//     }
// }

// console.log(bills)

// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));
// console.log(tips)

// let totalBill = [];

// totalBill.push(Math.floor(bills[0] + tips[0]));
// totalBill.push(Math.floor(bills[1] + tips[1]));
// totalBill.push(Math.floor(bills[2] + tips[2]));
// console.log(totalBill);

// Challenge 3
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     birthYear: 1999,
//     calcAge: function (){
//         return 2022 - this.birthYear;
//     },
//     job: 'Teacher',
//     friends: ['Michel', 'Peter', 'Stev']
// }

// console.log(jonas.calcAge())

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// Challenge 4
let tipAmount;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function (billsAmount) {
  if (billsAmount >= 50 && billsAmount <= 300) {
    return (tipAmount = (billsAmount * 15) / 100);
  } else {
    return (tipAmount = (billsAmount * 20) / 100);
  }
};

for (let i = 0; i < bills.length; i++) {
  let tip = tips.push(calcTip(bills[i]));
  totals.push(tip + bills[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
      sum += arr[i];
  };

  console.log(sum)
};

calcAverage(2, 3, 5, 6);

console.log(bills);
console.log(tips);
console.log(totals);
