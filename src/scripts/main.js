'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.form');
  const contactSubmitLink = document.querySelector('.contact__button.button');
  const textarea = document.querySelector('.form__textarea');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (contactForm.checkValidity()) {
        console.log(
          'Formularz został pomyślnie wysłany (bez przeładowania strony)!',
        );
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
      } else {
        console.log(
          'Formularz zawiera błędy walidacji. Proszę wypełnić wszystkie wymagane pola.',
        );
        alert('Please fill in all required fields before submitting the form.');
      }
    });
  }

  if (contactSubmitLink && contactForm) {
    contactSubmitLink.addEventListener('click', (event) => {
      event.preventDefault();

      contactForm.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      );
    });
  }

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

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', targetId);
        }
      } else if (targetId === '#') {
        e.preventDefault();
      }
    });
  });

  const shopLinks = document.querySelectorAll('.shop__link');
  const productGroups = document.querySelectorAll('.shop__products');

  shopLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetGroup = document.getElementById(targetId);

      if (targetGroup) {
        shopLinks.forEach((l) => l.classList.remove('shop__link--active'));
        link.classList.add('shop__link--active');

        productGroups.forEach((group) =>
          group.classList.remove('shop__products--active'),
        );
        targetGroup.classList.add('shop__products--active');
        history.replaceState(null, '', `#${targetId}`);
      }
    });
  });

  const allProductsSection = document.querySelector('.all-products');
  const allProductsBtn = document.querySelector('.product__button');
  const backBtn = document.querySelector('.js-back');
  const page = document.getElementById('page');

  if (allProductsBtn && allProductsSection && page) {
    allProductsBtn.addEventListener('click', (e) => {
      e.preventDefault();

      allProductsSection.classList.add('all-products--active');

      page.style.display = 'none';
      history.replaceState(null, '', '#all-products');
    });
  }

  if (backBtn && allProductsSection && page) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();

      allProductsSection.classList.remove('all-products--active');

      page.style.display = '';
      history.replaceState(null, '', '#shop');
    });
  }
});
