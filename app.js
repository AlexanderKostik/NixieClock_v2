const firstChildTensOfHours = document.querySelector('.tensOfHours div:first-child');
const lastChildTensOfHours = document.querySelector('.tensOfHours div:last-child');
const firstChildUnitsOfHours = document.querySelector('.unitsOfHours div:first-child');
const lastChildUnitsOfHours = document.querySelector('.unitsOfHours div:last-child');

const firstChildTensOfMinuts = document.querySelector('.tensOfMinutes div:first-child');
const lastChildTensOfMinuts = document.querySelector('.tensOfMinutes div:last-child');
const firstChildUnitsOfMinutes = document.querySelector('.unitsOfMinutes div:first-child');
const lastChildUnitsOfMinutes = document.querySelector('.unitsOfMinutes div:last-child');

const firstChildTensOfSeconds = document.querySelector('.tensOfSeconds div:first-child');
const lastChildTensOfSeconds = document.querySelector('.tensOfSeconds div:last-child');
const firstChildUnitsOfSeconds = document.querySelector('.unitsOfSeconds div:first-child');
const lastChildUnitsOfSeconds = document.querySelector('.unitsOfSeconds div:last-child');

const hunburgerIcon = document.querySelector('.humburger-icon');
const closeIcon = document.querySelector('.fa-times-circle');
const asideMenu = document.querySelector('.aside-menu');

const nixieClock = document.querySelector('.nixie-clock');

let showMenu = 0;


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


hunburgerIcon.onclick = function () {

  showMenu = 1;
  this.style.display = "none";
  asideMenu.style.width = "300px";
  asideMenu.style.overflowX = "visible";

  // console.log(this);
}


closeIcon.onclick = function () {

  showMenu = 0;
  asideMenu.style.width = "0px";
  // document.querySelector('.aside').style.visibility = "hidden";
  asideMenu.style.overflowX = "hidden";
  hunburgerIcon.style.display = "block";
}


document.querySelector('.fontSize-input').addEventListener('keypress', function (e) {

  if (e.key === 'Enter') {
    nixieClock.style.fontSize = this.value + "px";
  }

  // if (13 == e.keyCode) {
  //   console.log('it was pressed  Enter');
  // } else {
  //   console.log('it was pressed any key');
  // }
})


document.querySelector('.digitColor-input').addEventListener('input', function () {

  nixieClock.style.color = this.value;
})











