let firstChildTensOfHours = document.querySelector('.tensOfHours div:first-child');
let lastChildTensOfHours = document.querySelector('.tensOfHours div:last-child');
let firstChildUnitsOfHours = document.querySelector('.unitsOfHours div:first-child');
let lastChildUnitsOfHours = document.querySelector('.unitsOfHours div:last-child');

let firstChildTensOfMinuts = document.querySelector('.tensOfMinutes div:first-child');
let lastChildTensOfMinuts = document.querySelector('.tensOfMinutes div:last-child');
let firstChildUnitsOfMinutes = document.querySelector('.unitsOfMinutes div:first-child');
let lastChildUnitsOfMinutes = document.querySelector('.unitsOfMinutes div:last-child');

let firstChildTensOfSeconds = document.querySelector('.tensOfSeconds div:first-child');
let lastChildTensOfSeconds = document.querySelector('.tensOfSeconds div:last-child');
let firstChildUnitsOfSeconds = document.querySelector('.unitsOfSeconds div:first-child');
let lastChildUnitsOfSeconds = document.querySelector('.unitsOfSeconds div:last-child');



function showTime() {

  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hour = date.getHours();

  //----- статические переменные -------------
  if (typeof tensOfHoursPriv == 'undefined') tensOfHoursPriv = 0;
  if (typeof unitsOfHoursPriv == 'undefined') unitsOfHoursPriv = 0;
  if (typeof tensOfMinutesPriv == 'undefined') tensOfMinutesPriv = 0;
  if (typeof unitsOfMinutesPriv == 'undefined') unitsOfMinutesPriv = 0;
  if (typeof tensOfSecondsPriv == 'undefined') tensOfSecondsPriv = 0;


  //////////////
  //  ЧАСЫ  //
  ////////////// 

  // десятки часов
  if (tensOfHoursPriv != Math.floor(hour / 10)) { // если изменились десятки часов

    if ((Math.round(window.getComputedStyle(firstChildTensOfHours).opacity)) == 1) {
      firstChildTensOfHours.style.opacity = 0;
    } else {
      firstChildTensOfHours.style.opacity = 1;
      firstChildTensOfHours.textContent = Math.floor(hour / 10);
    }


    if ((Math.round(window.getComputedStyle(lastChildTensOfHours).opacity)) == 1) {
      lastChildTensOfHours.style.opacity = 0;
    } else {
      lastChildTensOfHours.style.opacity = 1;
      lastChildTensOfHours.textContent = Math.floor(hour / 10);
    }

    tensOfHoursPriv = Math.floor(hour / 10);
  }

  // единици часов
  if (unitsOfHoursPriv != Math.floor(hour % 10)) { // если изменились единици часов

    if ((Math.round(window.getComputedStyle(firstChildUnitsOfHours).opacity)) == 1) {
      firstChildUnitsOfHours.style.opacity = 0;
    } else {
      firstChildUnitsOfHours.style.opacity = 1;
      firstChildUnitsOfHours.textContent = Math.floor(hour % 10);
    }


    if ((Math.round(window.getComputedStyle(lastChildUnitsOfHours).opacity)) == 1) {
      lastChildUnitsOfHours.style.opacity = 0;
    } else {
      lastChildUnitsOfHours.style.opacity = 1;
      lastChildUnitsOfHours.textContent = Math.floor(hour % 10);
    }

    unitsOfHoursPriv = Math.floor(hour % 10);
  }

  //////////////
  //  МИНУТЫ  //
  ////////////// 

  // десятки минут
  if (tensOfMinutesPriv != Math.floor(min / 10)) { // если изменились десятки минут

    if ((Math.round(window.getComputedStyle(firstChildTensOfMinuts).opacity)) == 1) {
      firstChildTensOfMinuts.style.opacity = 0;
    } else {
      firstChildTensOfMinuts.style.opacity = 1;
      firstChildTensOfMinuts.textContent = Math.floor(min / 10);
    }


    if ((Math.round(window.getComputedStyle(lastChildTensOfMinuts).opacity)) == 1) {
      lastChildTensOfMinuts.style.opacity = 0;
    } else {
      lastChildTensOfMinuts.style.opacity = 1;
      lastChildTensOfMinuts.textContent = Math.floor(min / 10);
    }

    tensOfMinutesPriv = Math.floor(min / 10);
  }

  // единици минут
  if (unitsOfMinutesPriv != Math.floor(min % 10)) { // если изменились единици минут

    if ((Math.round(window.getComputedStyle(firstChildUnitsOfMinutes).opacity)) == 1) {
      firstChildUnitsOfMinutes.style.opacity = 0;
    } else {
      firstChildUnitsOfMinutes.style.opacity = 1;
      firstChildUnitsOfMinutes.textContent = Math.floor(min % 10);
    }


    if ((Math.round(window.getComputedStyle(lastChildUnitsOfMinutes).opacity)) == 1) {
      lastChildUnitsOfMinutes.style.opacity = 0;
    } else {
      lastChildUnitsOfMinutes.style.opacity = 1;
      lastChildUnitsOfMinutes.textContent = Math.floor(min % 10);
    }

    unitsOfMinutesPriv = Math.floor(min % 10);
  }


  ///////////////
  //  СЕКУНДЫ  //
  /////////////// 

  // десятки секунд
  if (tensOfSecondsPriv != Math.floor(sec / 10)) { // если изменились десятки секунд

    if ((Math.round(window.getComputedStyle(firstChildTensOfSeconds).opacity)) == 1) {
      firstChildTensOfSeconds.style.opacity = 0;
    } else {
      firstChildTensOfSeconds.style.opacity = 1;
      firstChildTensOfSeconds.textContent = Math.floor(sec / 10);
    }


    if ((Math.round(window.getComputedStyle(lastChildTensOfSeconds).opacity)) == 1) {
      lastChildTensOfSeconds.style.opacity = 0;
    } else {
      lastChildTensOfSeconds.style.opacity = 1;
      lastChildTensOfSeconds.textContent = Math.floor(sec / 10);
    }

    tensOfSecondsPriv = Math.floor(sec / 10);
  }

  // единици секунд
  if ((Math.round(window.getComputedStyle(firstChildUnitsOfSeconds).opacity)) == 1) {
    firstChildUnitsOfSeconds.style.opacity = 0;
  } else {
    firstChildUnitsOfSeconds.style.opacity = 1;
    firstChildUnitsOfSeconds.textContent = sec % 10;
  }


  if ((Math.round(window.getComputedStyle(lastChildUnitsOfSeconds).opacity)) == 1) {
    lastChildUnitsOfSeconds.style.opacity = 0;
  } else {
    lastChildUnitsOfSeconds.style.opacity = 1;
    lastChildUnitsOfSeconds.textContent = sec % 10;
  }



  // console.log(`firstChild.opacity = ${Math.round(window.getComputedStyle(firstChildUnitsOfSeconds).opacity)}`);
  // console.log(`lastChild.opacity = ${Math.round(window.getComputedStyle(lastChildUnitsOfSeconds).opacity)}`);
  // console.log(`firstChild.opacity = ${window.getComputedStyle(firstChildUnitsOfSeconds).opacity}`);
  // console.log(`lastChild.opacity = ${window.getComputedStyle(lastChildUnitsOfSeconds).opacity}`);


}

setInterval(showTime, 1000);





/*
------ Data Types ------
1) number
2) string
3) boolean
4) underfined
5) null
6) object
7) symbol (ES6)

*/

let num1 = 5;
console.log('num1 = 5 --> typeof num1 =', typeof num1); // number
let num2 = 5.5;
console.log('num2 = 5.5 --> typeof num2 =', typeof num2); // number
let num3 = 5e3; // 5000
console.log('num3 = 5e3 = 5000 --> typeof num3 =', typeof num3); // number
let num4 = 5e-3; // 0.005
console.log('num4 = 5e-3 = 0.005 --> typeof num4 =', typeof num4); // number
console.log('');
let str = 'Hello World';
console.log('str = \'Hello\' --> typeof str =', typeof str); // string
console.log('');
let areYouOk = true;
console.log('areYouOk = true --> typeof areYouOk =', typeof areYouOk); // boolean
console.log('');
let user;
console.log('typeof user =', typeof user) // underfind
console.log('');
console.log('typeof null =', typeof null) // object
console.log('');
console.log('typeof Symbol() =', typeof Symbol()) // symbol
console.log('');
//-------------------------------------------------------------
function f1() { }; // создаем функцию по имени f1
let str2 = `Такого типа данных как function НЕ существует.Это относится к неточностям JS,
на которые пошли разработчики дабы иметь возможность отличать object от function.`;
console.log(`typeof f1 = ${typeof f1} --> ${str2}`); // function



let tmp;
let t = 1 + '2';
console.log('typeof 1 + \'2\' =', typeof t)
tmp = 1 + '2'; // string, потому что для строк определена конкатенация (сложение строк)
tmp = '5' + 2; // string
tmp = 4 + '5' + 1; // string
tmp = 24 + 5 + 'px'; // string
tmp = '24' - 5 + 'px'; // string
tmp = 'px' + 20; // string

tmp = 1 - '2'; // number, потому что для строк не определена операция вычитания 
tmp = '5' - 2; // number
tmp = 4 - '5' + 8; // number
tmp = '4' * '8'; // number

tmp = 'px' + 20 - 5; // NaN (при переведении рх20 в число мы получим NaN, а NaN-5=NaN )
console.log('typeof NaN =', typeof NaN); // number <!!!!>





console.log('null + 2 =', null + 2); // 2
console.log('typeof null + 7 =', typeof null + 7); // object7 <!!!!>

console.log(typeof null)
console.log(typeof underfined)



/*
    == and ===
 ==  сравнение с приведением типов
 === сравнение без приведением типов
*/
let a = 1;
let b = '1';

if (a == b) {
  console.log('a==b');
} else {
  console.log('a!=b');
}

if (a === b) {
  console.log('a==b');
} else {
  console.log('a!=b');
}









  // console.log('tmp =', tmp);
  // console.log(typeof tmp);
