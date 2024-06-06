document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('#menu-toggle');
  const offcanvas = document.querySelector('.navigation_div');
  const toggle = document.querySelector('.toggle');

  menuToggle.addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
    toggle.style.display = "none";
  });

  offcanvas.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      document.body.classList.remove('menu-open');
      toggle.style.display = "flex";
    }
  });

  offcanvas.addEventListener('click', function () {
    document.body.classList.remove('menu-open');
    toggle.style.display = "flex";
  })
});