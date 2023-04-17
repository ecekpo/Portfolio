const menuIcon = document.querySelector('.mob-menu');
const sideNav = document.querySelector('.mobileNav');
const menuLinks = document.querySelectorAll('.menuMobile');
const main = document.querySelector('main');
// let body = document.querySelector('body');

const open = () => {
  sideNav.classList.add('mobileNavActive');
  main.style.opacity = '0.2';
  main.style.backdropfilter = 'blur(8px)';
  // body.style.color = '#6070FF';
};

const close = () => {
  sideNav.classList.remove('mobileNavActive');
  main.style.opacity = '1';
};

menuIcon.addEventListener('click', open);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', close);
});

const form = document.querySelector('.form');
form.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('.fullname').value,
    email: document.querySelector('.emails').value,
    message: document.querySelector('.contact-message').value,
  };

  localStorage.setItem('formContent', JSON.stringify(formInfo));
});

const dash = JSON.parse(localStorage.getItem('formContent'));
document.querySelector('.fullname').value = dash.name;
document.querySelector('.emails').value = dash.email;
document.querySelector('.contact-message').value = dash.message;

