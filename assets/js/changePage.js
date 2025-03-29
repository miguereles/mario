// Função para mostrar/ocultar seções
function showSection(sectionId) {
    // Esconde todas as seções
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Mostra apenas a seção selecionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Fecha o menu mobile se estiver aberto
    const menuMobile = document.getElementById('menuMobile');
    if (menuMobile) {
        menuMobile.classList.remove('active');
    }
}

// Menu mobile
const hamburger = document.getElementById('hamburger');
const menuMobile = document.getElementById('menuMobile');

hamburger.addEventListener('click', function() {
    menuMobile.classList.toggle('active');
});

// Fecha o menu quando um item é clicado
const menuItems = document.querySelectorAll('.menu-mobile a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuMobile.classList.remove('active');
    });
});
