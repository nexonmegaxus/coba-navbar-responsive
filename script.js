const menu = document.querySelector('.menu');

const navopen = document.querySelector('.navopen');

menu.addEventListener('click', function () {
  navopen.classList.toggle('toggle');
});
