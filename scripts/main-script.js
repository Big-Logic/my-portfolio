'use strict';

//about section script

const aboutSkills = document.querySelector('.about__skills');
console.log(aboutSkills);

const skillsObserverFun = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    console.log(entry);
    console.log('Connected');
    document.querySelector('.about__skills--wrapper--html').style.width = '99%';
    document.querySelector('.about__skills--wrapper--css').style.width = '90%';
    document.querySelector('.about__skills--wrapper--javascript').style.width =
      '85%';
    document.querySelector('.about__skills--wrapper--react').style.width =
      '88%';
    document.querySelector('.about__skills--wrapper--node').style.width = '80%';

    let htmlSkills = 1;
    let cssSkills = 1;
    let javascriptSkills = 1;
    let reactSkills = 1;
    let nodeSkills = 1;

    //interval for all skills
    let interval = setInterval(() => {
      //interval for incrementing the html percentage
      document.querySelector('.html--skills').textContent = htmlSkills;
      //clear the interval once htmlSkills reaches 99;
      if (htmlSkills === 99) clearInterval(interval);
      /////////

      if (htmlSkills !== 99) htmlSkills = htmlSkills + 1;

      //interval for incrementing the css percentage
      document.querySelector('.css--skills').textContent = cssSkills;

      if (cssSkills !== 90) cssSkills = cssSkills + 1;

      //interval for incrementing the javascript percentage
      document.querySelector('.javascript--skills').textContent =
        javascriptSkills;

      if (javascriptSkills !== 85) javascriptSkills = javascriptSkills + 1;

      //interval for incrementing the react percentage
      document.querySelector('.react--skills').textContent = reactSkills;

      if (reactSkills !== 88) reactSkills = reactSkills + 1;

      //interval for incrementing the node percentage
      document.querySelector('.node--skills').textContent = nodeSkills;

      if (nodeSkills !== 80) nodeSkills = nodeSkills + 1;
    }, 10);

    observer.unobserve(aboutSkills);
  }
};

const observerSkills = new IntersectionObserver(skillsObserverFun, {
  root: null,
  threshold: 0.5,
  //   rootMargin: '150px',
});

observerSkills.observe(aboutSkills);
