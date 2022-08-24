const nameEle = document.querySelector('.author__name');
const projectContent = document.querySelector('.project__content');
const projectEle = document.querySelectorAll('.project__content--child');
const projectPrevBtn = document.querySelector('.prev__btn');
const projectViewBtn = document.querySelector('project__view--btn');
const projectNextBtn = document.querySelector('.next__btn');

const sliderEle = document.querySelectorAll('.gallery__child');

/*Image Slider for gallery*/
// slider
let sliderCount = 0;
sliderEle.forEach((ele) => {
  ele.style.transform = `translateX(${sliderCount}%)`;
  ele.dataset.slider = sliderCount;
  sliderCount += 109;
});

let ct = 0;
setInterval(() => {
  sliderCount = 0;
  if (ct === sliderEle.length - 1) {
    sliderEle.forEach((ele, i) => {
      ele.dataset.slider = sliderCount;
      ele.style.transform = `translateX(${sliderCount}%)`;
      sliderCount += 109;
    });
    ct = 0;
  } else {
    sliderEle.forEach((ele) => {
      ele.style.transform = `translateX(${ele.dataset.slider - 109}%)`;

      ele.dataset.slider = Number(ele.dataset.slider) - 109;
    });
    ct += 1;
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

projectEle[0].classList.add('project__content--child-show');

let curIndex = 0;

projectPrevBtn.addEventListener('click', function () {
  curIndex -= 1;
  if (curIndex <= 0) {
    curIndex = 0;
  }
  projectEle.forEach((ele) => {
    ele.classList.remove('project__content--child-show');
  });
  projectEle[curIndex].classList.add('project__content--child-show');
});

projectNextBtn.addEventListener('click', function () {
  curIndex += 1;
  if (curIndex === projectEle.length) {
    curIndex = projectEle.length - 1;
  }
  projectEle.forEach((ele) => {
    ele.classList.remove('project__content--child-show');
  });
  projectEle[curIndex].classList.add('project__content--child-show');
});
