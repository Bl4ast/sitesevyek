// js/particles.js
function createParticles(theme) {
    const container = document.getElementById('particles-container');
    container.innerHTML = ''; // Limpa as partículas antigas

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição e tempo aleatórios
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        if (theme === 'red') {
            // Partículas de fogo
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.backgroundColor = '#ff6b2b'; // Laranja/Vermelho
            particle.style.boxShadow = '0 0 10px #ff3300';
        } else {
            // Estrelinhas
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.backgroundColor = '#ffffff';
            particle.style.boxShadow = '0 0 8px #66ccff';
        }

        container.appendChild(particle);
    }
}