'use strict';

//Header and main navigation functionalities
const navOpenBtn = document.querySelector('.header__nav--btn');
const navCloseBtn = document.querySelector('.header__nav--closebtn');
const headerNav = document.querySelector('.header__nav');
const headerNavItems = document.querySelector('.header__nav--items');

//Open the navigation menu on tablet and smaller devices
navOpenBtn.addEventListener('click', function () {
  headerNav.classList.add('header__nav--show');
  headerNavItems.classList.add('.header__nav--items--show');
});

//cloose the navigation menu on tablet and smaller devices
navCloseBtn.addEventListener('click', function () {
  headerNav.classList.remove('header__nav--show');
  headerNavItems.classList.remove('.header__nav--items--show');
});

headerNav.addEventListener('click', function () {
  headerNav.classList.remove('header__nav--show');
  headerNavItems.classList.remove('.header__nav--items--show');
});
