// ==========================================
// BANCO DE DADOS DE LORE (CAPÍTULOS)
// ==========================================

const lorePersonagens = {
    'sevyek': {
        cap1_titulo: 'Capítulo I - As Estrelas que Caíram',
        cap1_cover: 'SevyIMGS/Back5.jpg', 
        cap1_icon: 'SevyIMGS/Icon1.png',     
        cap1_color: '#00e5ff',               
        cap1_texto: `
            <div class="lore-subchapter">
                <p>Os cosmos, perfeitos e imperfeitos, tudo ao mesmo tempo, se uniam para criar galáxias, planetas, constelações e os astros mais brilhantes possíveis...</p>
            </div>
        `,
        cap2_titulo: 'Capítulo II - O Despertar da Floresta',
        cap2_cover: 'SevyIMGS/Banner2.jpg',
        cap2_icon: 'SevyIMGS/Icon2.png',
        cap2_color: '#00e5ff',
        cap2_texto: `
            <div class="lore-subchapter">
                <p>O passar das noites era lento, mas também quase que necessário...</p>
            </div>
        `
    },

    'nyev': {
        cap1_titulo: 'Capítulo I - O Início',
        cap1_cover: 'LukeaIMGS/Banner1.jpg',
        cap1_icon: 'LukeaIMGS/Icon1.png',
        cap1_color: '#15ecaa',
        cap1_texto: `
            <div class="lore-subchapter">
                <p>Texto do primeiro capítulo da lore do Lukea...</p>
            </div>
        `
    }
};

// ==========================================
// VARIÁVEIS DE CONTROLE
// ==========================================
let personagemAtualId = null;
let totalCapitulosAtuais = 0;

// ==========================================
// FUNÇÕES DE RENDERIZAÇÃO E NAVEGAÇÃO
// ==========================================

function renderizarCapitulo(num) {
    const dadosCapitulos = lorePersonagens[personagemAtualId];
    if (!dadosCapitulos) return;

    const contentArea = document.querySelector('.extra-scroll-area');
    
    if (contentArea) {
        // Aplica a classe de saída (fade out + deslize)
        contentArea.classList.add('fade-out');
        
        setTimeout(() => {
            atualizarConteudoTela(dadosCapitulos, num);
            contentArea.scrollTop = 0;
            // Remove a classe para fazer o fade in suave do novo capítulo
            contentArea.classList.remove('fade-out');
        }, 350); // Sincronizado com o tempo do CSS
    } else {
        criarTelaLore(dadosCapitulos, num);
    }
}

function atualizarConteudoTela(dadosCapitulos, num) {
    const corTema = dadosCapitulos[`cap${num}_color`] || '#00e5ff';
    document.documentElement.style.setProperty('--theme-color', corTema);

    let iconData = dadosCapitulos[`cap${num}_icon`];
    let iconStyle = iconData ? `background-image: url('${iconData}');` : '';

    let btnAnterior = num > 1 ? `<button class="btn-prev-chapter" data-target="${num - 1}"><span>&larr;</span> Capítulo Anterior</button>` : '';
    let btnProximo = num < totalCapitulosAtuais ? `<button class="btn-next-chapter" data-target="${num + 1}">Próximo Capítulo <span>&rarr;</span></button>` : '';

    const screen = document.getElementById('lore-main-screen');
    if (screen) {
        screen.style.setProperty('--theme-color', corTema);
        screen.querySelector('.extra-bg-blur').style.backgroundImage = `url('${dadosCapitulos[`cap${num}_cover`] || ''}')`;
        screen.querySelector('.notion-cover').style.backgroundImage = `url('${dadosCapitulos[`cap${num}_cover`] || ''}')`;
        
        const iconEl = screen.querySelector('.notion-icon');
        iconEl.style.cssText = iconStyle;
        
        screen.querySelector('.notion-title').innerText = dadosCapitulos[`cap${num}_titulo`];
        screen.querySelector('.notion-content').innerHTML = dadosCapitulos[`cap${num}_texto`];
        
        const navContainer = screen.querySelector('.notion-nav-buttons');
        navContainer.innerHTML = btnProximo + btnAnterior;
        
        atribuirEventosBotoes();
    }
}

function criarTelaLore(dadosCapitulos, num) {
    const wrapper = document.getElementById('lore-wrapper');
    wrapper.innerHTML = '';

    const tela = document.createElement('div');
    tela.id = 'lore-main-screen';
    tela.className = 'chapter-screen';

    const corTema = dadosCapitulos[`cap${num}_color`] || '#00e5ff';
    tela.style.setProperty('--theme-color', corTema);

    let iconData = dadosCapitulos[`cap${num}_icon`];
    let iconStyle = iconData ? `background-image: url('${iconData}');` : '';

    let btnAnterior = num > 1 ? `<button class="btn-prev-chapter" data-target="${num - 1}"><span>&larr;</span> Capítulo Anterior</button>` : '';
    let btnProximo = num < totalCapitulosAtuais ? `<button class="btn-next-chapter" data-target="${num + 1}">Próximo Capítulo <span>&rarr;</span></button>` : '';

    tela.innerHTML = `
        <div class="extra-bg-blur" style="background-image: url('${dadosCapitulos[`cap${num}_cover`]}')"></div>
        <div class="extra-scroll-area">
            <button class="lore-fixed-btn" onclick="fecharLore()">&larr; Voltar</button>

            <div class="notion-cover" style="background-image: url('${dadosCapitulos[`cap${num}_cover`]}')"></div>
            <div class="notion-container">
                <div class="notion-icon" style="${iconStyle}"></div>
                <h1 class="notion-title">${dadosCapitulos[`cap${num}_titulo`]}</h1>
                <div class="notion-content">${dadosCapitulos[`cap${num}_texto`]}</div>
                
                <div class="notion-nav-buttons" style="width: 100%; display: flex; flex-direction: column; gap: 15px; margin-top: 30px;">
                    ${btnProximo}
                    ${btnAnterior}
                </div>
            </div>
        </div>
    `;
    wrapper.appendChild(tela);
    atribuirEventosBotoes();

    // Abre a tela principal suavemente
    setTimeout(() => {
        tela.classList.add('show-chapter');
    }, 30);
}

function atribuirEventosBotoes() {
    const wrapper = document.getElementById('lore-wrapper');
    wrapper.querySelectorAll('.btn-next-chapter, .btn-prev-chapter').forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener('click', (e) => {
            const targetId = parseInt(e.currentTarget.getAttribute('data-target'));
            renderizarCapitulo(targetId);
        });
    });
}

window.abrirLore = function(personagemId) {
    personagemAtualId = personagemId;
    const dadosCapitulos = lorePersonagens[personagemId];
    if (!dadosCapitulos) return;

    totalCapitulosAtuais = 0;
    while (dadosCapitulos[`cap${totalCapitulosAtuais + 1}_titulo`]) {
        totalCapitulosAtuais++;
    }

    criarTelaLore(dadosCapitulos, 1);
};

window.fecharLore = function() {
    const screen = document.getElementById('lore-main-screen');
    if (screen) {
        screen.classList.remove('show-chapter');
        setTimeout(() => {
            document.getElementById('lore-wrapper').innerHTML = '';
        }, 1400); 
    }
};