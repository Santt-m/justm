import { toggleNav } from './nav/nav.js';

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', toggleNav);
});
