const rightContent = document.querySelector('.right-content');
const skillsLine = document.querySelectorAll('.skills-line');
const skillsBar = document.querySelectorAll('.skills-bar');
const skillsWrapper = document.querySelector('.skills-wrapper');
const burgerBtn = document.querySelector('.burger-btn');
const menuBody = document.querySelector('.menu-body');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.nav-links');

function showItem() {
  skillsLine.forEach((skillsLines) => {
    skillsLines.classList.add('active');
  });
}

function hideItem() {
  skillsLine.forEach((s) => {
    s.classList.remove('active');
  });
}

rightContent.addEventListener('scroll', () => {
  const sectionPos = skillsWrapper.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    showItem();
  } else {
    hideItem();
  }
});

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  menuBody.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  menuBody.classList.toggle('active');
  overlay.classList.toggle('active');
});

const cardHover = document.querySelectorAll('.education-card');

let hover = (e) => {
  e.target.classList.add('hover');
};

let end = (e) => {
  e.target.classList.remove('hover');
};

cardHover.forEach((card) => {
  card.addEventListener('touchmove', hover);
  card.addEventListener('touchend', end);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menuBody.classList.toggle('active');
    overlay.classList.toggle('active');
  });
});
