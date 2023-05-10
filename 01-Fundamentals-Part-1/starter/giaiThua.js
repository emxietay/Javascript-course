// let js = 'amazing';
// 1+1+6;
// console.log (6+9+3);
// let firstName = "Nam";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// let firstNameOfNamNguyen = ("Chris")
// console.log(firstNameOfNamNguyen);
// console.log(firstNameOfNamNguyen);
// console.log(firstNameOfNamNguyen);
// console.log(typeof null)
// let age = 31;
// age = 30;
// const birthYear = 1991;
// // birthYear = 1990;
// const abc = 333;
// var job;
// console.log(typeof job)
// job = 'programmer'
// console.log(job)
// const now = 2023
// const ageNam = now - 1992
// const ageTam = now - 1996
// console.log(ageNam, ageTam)
// const lastName = 'Nguyen'
// console.log(firstName,lastName,ageNam + " love Tam " + ageTam + "!")
// console.log(ageNam>ageTam)
// console.log(ageNam<ageTam)
// const isFullAge = ageNam >= 18;
// console.log (now - 1992 > now - 1996)
// const massMarks = 78;
// const heightMarks = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const theBMIOfJohn = massJohn/heightJohn**2;
// const theBMIOfMarks = massMarks/heightMarks**2;
// console.log('John: ' + theBMIOfJohn + '\nMarks: ' + theBMIOfMarks)
// const markHigerBMI = theBMIOfJohn > theBMIOfMarks;
// console.log('John: ' + theBMIOfJohn + '\nMarks: ' + theBMIOfMarks,markHigerBMI)
// const firstName1 = 'Nam';
// const job1 = 'teacher';
// const birthYear1 = 1992;
// const year = 2023;
// console.log(`I'm ${firstName1}, a ${year-birthYear1} year old ${job1}! `)
// console.log(`Just a regular string...`)
// // console.log('String with \n multiple 
// const massNam = 60;
// const massTam = 50;
// const heightNam = 1.7;
// const heightTam = 1.54;
// var BMINam = massNam/heightNam**2;
// var BMITam = massTam/heightTam**2;
// if (BMINam > BMITam) {
//     console.log(`Nam: ${BMINam} higher Tam with ${BMITam} `)
// } else console.log(`Tam: ${BMITam} higher Tam with ${BMINam} `)
// console.log(Number(massNam))
// const inputYear = '1992';
// console.log(Number(inputYear) + 32)
// console.log('I am ' + (2023 - Number(inputYear)) + ' years old.')
// let n = '1' + 1;
// n --; 
// n ** 3
// n = n**10
// console.log(n**8)
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Nam'))
// console.log(Boolean({}))
// console.log(Boolean(''))
// const money = 0;
// if (money) {
//     console.log ("Don't send it all ;")
// } console.log ('You should get a job!')
// let height = 0;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED')
// }
// // const favourite = prompt()
// const hasDriverLicense = true;
// const hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision)
// console.log(hasDriverLicense || hasGoodVision)
// console.log(!hasDriverLicense )
// const isTired = true;
// console.log(hasDriverLicense && hasGoodVision && isTired)
// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('You can drive')
// } else console.log('let someone drive')
// const scoreDolphins1 = 96
// const scoreDolphins2 = 110
// const scoreDolphins3 = 89
// const scoreKoalas1 = 88
// const scoreKoalas2 = 95
// const scoreKoalas3 = 110
// const averageScoreDolphins = (scoreDolphins1+scoreDolphins2+scoreDolphins3)/3
// const averageScoreKoalas = (scoreKoalas1+scoreKoalas2+scoreKoalas3)/3
// if (averageScoreDolphins > averageScoreKoalas) {
//     console.log('Dolphins is the winner!');
// } else if (averageScoreDolphins < averageScoreKoalas) console.log('Koalas is the winner') 
// else console.log('draw')
// if (averageScoreDolphins>averageScoreKoalas && averageScoreDolphins >=100) {
//     console.log('Dolphins is the winner')
// } else if (averageScoreKoalas>averageScoreDolphins && averageScoreKoalas >=100) {
//     console.log('Koalas is the winner')
// } else if ((averageScoreDolphins === averageScoreKoalas) && (averageScoreDolphins >=100)) { 
// console.log('Both team get trophy');
// }
// else if ((averageScoreKoalas < 100 && averageScoreDolphins < 100)) {
//     console.log('no team win');
// } 
const day = 'Sunday'
switch(day) {
    case 'monday' :
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday' :
        console.log('Preparing theory video');
        break;
    case 'wednesday' :
        console.log('Wed');
        break;
    case 'thursday' :
        console.log('thursday');
        break;
    case 'Friday' : 
        console.log('Friday');
        break;
    case 'Saturday' :
        console.log('Saturday');
        break;
    case 'Sunday' :    
        console.log('Sunday');
//         break;
//     default:
//         console.log('Not a valid day')
// }
const day = 'Tuesday';
if (day === 'Monday') {
            console.log('Plan course structure');
        console.log('Go to coding meetup');
    }
else if (day === 'Tuesday') {
        console.log('Preparing theory video');
    }
else if (day === 'Wednesday') { 
        console.log('Wed');
    }
else if (day ==='Thursday') {
        console.log('thursday');
    }
else if (day === 'Friday') { 
        console.log('Friday');
    }
else if (day === 'Saturday') {
        console.log('Saturday');
    }
else if (day === 'Sunday') {    
        console.log('Sunday');
    }
else 
// 
const bill = 4;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill *.20;
console.log(`The bill was ${bill}, the tip was ${tip}, the total is ${bill+tip}`);
