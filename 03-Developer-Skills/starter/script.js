// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';
// a = 'fdfdf';
// console.log(a);

console.log('abc');


const temperature = [ 5,5,6,7,8,1,3]
const temp3 = [6,67,5,4,7,8,9,8]
const temp4 = [6,67,5,4,7,8,9,8]
const temp5 = [6,67,5,4,'current',7,8,9,8]

const abc = function(temp3) {
mes = '';
for (i = 0; i < temp3.length; i++) {
mes = mes + `...${temp3[i]}°C in ${i+1} days\n`

}
console.log(mes) 
}
abc(temp5)
