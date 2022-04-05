// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = (arr) => {
    for( let i = 0; i < arr.length; i++){
        console.log(`${arr[i]}oC in ${i} days`)
    }
}

printForecast([12, 5, -5, 0, 4])