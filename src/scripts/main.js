'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

if (burger && nav) {
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('nav--open');
    burger.classList.toggle('burger--active');
    document.body.classList.toggle('body--with-menu');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    burger.classList.remove('burger--active');
    document.body.classList.remove('body--with-menu');
  });
});
