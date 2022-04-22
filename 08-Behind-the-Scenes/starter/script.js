// 'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'
      const str = `oh!, and you're a millenial, ${firstName}.`;
      console.log(str);

      function sum(a, b){
          return a + b;
      }

      output = 'New Output';
    }
    console.log(sum(2, 3))
    console.log(millenial);
    // console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Jonas';

calcAge(1991);
