// js/theme.js
function switchThemeToBlue() {
    const body = document.body;
    
    // Troca as classes do CSS
    body.classList.remove('theme-red');
    body.classList.add('theme-blue');

    // Troca as partículas de fogo para estrelas
    createParticles('blue');
}

function setupLoreButton() {
    const btnLore = document.getElementById('btn-ler-lore');
    
    btnLore.addEventListener('click', () => {
        // Aqui você pode redirecionar para a página da religião/reino
        alert("Indo para a página de Lore! Quando voltar, o tema será azul.");
        
        // Simula que a pessoa leu a lore e as cores mudaram
        switchThemeToBlue();
    });
}