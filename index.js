const rightContent = document.querySelector('.right-content');
const skillsLine = document.querySelectorAll('.skills-line');
const skillsBar = document.querySelectorAll('.skills-bar');
const skillsWrapper = document.querySelector('.skills-wrapper');

function showItem() {
  skillsLine.forEach(skillsLines => {
    skillsLines.classList.add('active');
  })
}

function hideItem() {
  skillsLine.forEach(s => {
    s.classList.remove('active')
  })
}

rightContent.addEventListener('scroll', () => {
  const sectionPos = skillsWrapper.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    showItem();
  } else {
    hideItem();
  }
})
