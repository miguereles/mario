// Seleciona o botão do menu mobile e o menu
const hamburger = document.getElementById('hamburger');
const menuMobile = document.getElementById('menuMobile');

// Alterna o menu mobile ao clicar no botão
hamburger.addEventListener('click', function () {
    menuMobile.classList.toggle('active');
});

// Fecha o menu mobile ao clicar em um item
const menuItems = document.querySelectorAll('.menu-mobile a');
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        menuMobile.classList.remove('active');
    });
});

