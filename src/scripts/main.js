'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('nav--open');
    burger.classList.toggle('burger--active');
    document.body.classList.toggle('body--with-menu');
  });
}
