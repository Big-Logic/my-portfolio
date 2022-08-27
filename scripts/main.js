const mainHeader = document.querySelector('.main__header');
const headerContentCont = document.querySelector('.header__content--cont');
const navToggleBtn = document.querySelector('.nav__toggle--btn');
const navLinks = document.querySelectorAll('.nav__link');

const nameEle = document.querySelector('.author__name');
const projectContent = document.querySelector('.project__content');
const projectEle = document.querySelectorAll('.project__content--child');
const projectPrevBtn = document.querySelector('.prev__btn');
const projectViewBtn = document.querySelector('.project__view--btn');
const projectNextBtn = document.querySelector('.next__btn');

const sliderEle = document.querySelectorAll('.gallery__child');

/*
Mobile nav 
*/
const toggleNav = function () {
  mainHeader.classList.toggle('main__header--show');
  headerContentCont.classList.toggle('header__content--cont-show');
};

let toggleState = true;

navLinks.forEach((ele) => {
  ele.addEventListener('click', function () {
    mainHeader.classList.remove('main__header--show');
    headerContentCont.classList.remove('header__content--cont-show');
    toggleState = true;
    navToggleBtn.innerHTML = '<i class="las la-bars"></i>';
  });
});
//Add event listener to the nav toggle btn
navToggleBtn.addEventListener('click', function () {
  toggleNav();
  if (toggleState) {
    this.innerHTML = '<i class="las la-times"></i>';
  } else if (!toggleState) {
    this.innerHTML = '<i class="las la-bars"></i>';
  }

  if (toggleState) {
    toggleState = false;
  } else if (!toggleState) {
    toggleState = true;
  }
});

/*Image Slider for gallery*/
let sliderCount = 0;

//slider setup
const sliderInit = function () {
  sliderEle.forEach((ele) => {
    ele.style.transform = `translateX(${sliderCount}%)`;
    ele.dataset.slider = sliderCount;
    sliderCount += 109;
  });
};

//When the page first loads(Slider setup)
sliderInit();

let sliderFinishState = 0;

// Slider
setInterval(() => {
  sliderCount = 0;
  if (sliderFinishState === sliderEle.length - 1) {
    sliderInit();
    sliderFinishState = 0;
  } else {
    sliderEle.forEach((ele) => {
      ele.style.transform = `translateX(${ele.dataset.slider - 109}%)`;
      ele.dataset.slider = Number(ele.dataset.slider) - 109;
    });
    sliderFinishState += 1;
  }
}, 1500);

/* Name Changer */
nameEle.classList.add('author__name--chg');

setInterval(() => {
  nameEle.classList.toggle('author__name--chg');
  if (nameEle.textContent === 'Alfred Ngwayah') {
    nameEle.classList.toggle('author__name--chg');
    nameEle.textContent = 'Big Logic';
  } else {
    nameEle.classList.toggle('author__name--chg');
    nameEle.textContent = 'Alfred Ngwayah';
  }
}, 2000);

//Project changing func
const projectsLinks = [
  'https://gentlequiz.netlify.app/',
  'https://big-logic.github.io/random-password-generator/',
  '#',
];
projectEle[0].classList.add('project__content--child-show');
projectViewBtn.setAttribute('href', projectsLinks[0]);
let curIndex = 0;

const setView = function (
  btn,
  active = false,
  bgColor = '#EFEFEF',
  fgColor = '#606060'
) {
  btn.style.backgroundColor = bgColor;
  btn.style.color = fgColor;

  if (active) {
    btn.style.cursor = 'pointer';
    return;
  }

  btn.style.cursor = 'not-allowed';
};

setView(projectPrevBtn);

//add event to previous button
projectPrevBtn.addEventListener('click', function () {
  curIndex -= 1;
  if (curIndex <= 0) {
    curIndex = 0;
    setView(projectPrevBtn);
  }
  projectEle.forEach((ele) => {
    ele.classList.remove('project__content--child-show');
  });
  projectEle[curIndex].classList.add('project__content--child-show');
  setView(projectNextBtn, true, '#eb5353', '#fff');
  projectViewBtn.setAttribute('href', projectsLinks[curIndex]);
});

//add event to the next button
projectNextBtn.addEventListener('click', function () {
  curIndex += 1;
  if (curIndex === projectEle.length) {
    curIndex = projectEle.length - 1;
    setView(projectNextBtn);
  }
  projectEle.forEach((ele) => {
    ele.classList.remove('project__content--child-show');
  });
  projectEle[curIndex].classList.add('project__content--child-show');
  setView(projectPrevBtn, true, '#eb5353', '#fff');
  projectViewBtn.setAttribute('href', projectsLinks[curIndex]);
});
