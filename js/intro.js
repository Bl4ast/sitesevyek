document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const profileScreen = document.getElementById('profile-screen');
    const cssMoon = document.getElementById('css-moon');

    // 1. Gera estrelas caindo no fundo da intro
    const starsBg = document.getElementById('intro-stars');
    for(let i=0; i<30; i++) {
        let star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px'; star.style.height = '2px';
        star.style.background = '#fff';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.opacity = Math.random();
        starsBg.appendChild(star);
    }

    // 2. Sequência de Animação (O "Kaboom")
    setTimeout(() => {
        // Causa um pulso forte na lua
        cssMoon.style.transform = 'scale(1.2)';
        cssMoon.style.background = 'var(--theme-color)';
        cssMoon.style.boxShadow = '0 0 100px var(--theme-glow)';
        
        setTimeout(() => {
            // A tela explode/zoom out
            introScreen.classList.add('explode-intro');
            
            // Mostra o site principal
            profileScreen.classList.add('show-profile');
            