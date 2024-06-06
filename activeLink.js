let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navigation_div a');
let menuToggle = document.getElementById('menu-toggle');
let navigationDiv = document.querySelector('.navigation_div');

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 50;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (document.querySelector('.navigation_div a[href*=' + id + ']')) {
                    document.querySelector('.navigation_div a[href*=' + id + ']').classList.add('active-link');
                }
            });
        }
    });
};

