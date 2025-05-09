const btnHamburger = document.querySelector('.hamburger-menu');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');
const btnCloseWindow = document.querySelector('.menu-panel button')

btnHamburger.addEventListener('click', (event) => {
    menuPanel.classList.toggle('active');
 }
);

document.addEventListener('click', (event) => {
    if (!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuPanel.classList.remove('active');
    }
}
);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuPanel.classList.remove('active');
    });
}
);

btnCloseWindow.addEventListener('click', () => {
    menuPanel.classList.remove('active');
});