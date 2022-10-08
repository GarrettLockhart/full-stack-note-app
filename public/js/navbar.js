const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// add the active class once the hamburger is clicked
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// remove the menu once a link is clicked
document.querySelectorAll('nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
