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
//header and main navigation ends here

//hero section functionalities
const heroImageParents = document.querySelectorAll('.hero__image--parent');

console.log(heroImageParents[0]);
heroImageParents[0].style.opacity = 1;
let counter = 0;
const imagesDisplay = function () {
  if (counter === heroImageParents.length) {
    counter = 0;
  }
  console.log(counter);
  heroImageParents.forEach((ele) => {
    console.log(counter);
    ele.style.opacity = 0;
    heroImageParents[counter].style.opacity = 1;
  });
  counter = counter + 1;
};

setInterval(imagesDisplay, 6000);
