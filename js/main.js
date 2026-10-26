document.addEventListener('DOMContentLoaded', () => {
    const charEsquerda = personagens['sevyek'];
    const charDireita = personagens['nyev'];

    const nameLeft = document.querySelector('#square-left .char-name');
    const nameRight = document.querySelector('#square-right .char-name');
    if (nameLeft) nameLeft.innerText = charEsquerda.nome;
    if (nameRight) nameRight.innerText = charDireita.nome;

    const imgLeft = document.getElementById('img-left');
    const imgRight = document.getElementById('img-right');
    
    if (imgLeft) imgLeft.style.backgroundImage = `url('${charEsquerda.avatar}')`;
    if (imgRight) imgRight.style.backgroundImage = `url('${charDireita.avatar}')`;

    function applyDynamicColors(hex, prefix) {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        let rgb = `${r}, ${g}, ${b}`;
        document.documentElement.style.setProperty(`--${prefix}-color`, hex);
        document.documentElement.style.setProperty(`--${prefix}-glow-strong`, `rgba(${rgb}, 0.6)`);
        document.documentElement.style.setProperty(`--${prefix}-glow-light`, `rgba(${rgb}, 0.2)`);
        document.documentElement.style.setProperty(`--${prefix}-bg-hover`, `rgba(${rgb}, 0.1)`);
    }
    applyDynamicColors(charEsquerda.cor_principal, 'char1');
    applyDynamicColors(charDireita.cor_principal, 'char2');

    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorGlow = document.getElementById('custom-cursor-glow');
    const starsBg = document.getElementById('stars-bg');
    
    const btnStart = document.getElementById('btn-start');
    const moonWrapper = document.getElementById('moon-wrapper');
    const moonPhase = document.getElementById('moon-phase');
    const introContainer = document.getElementById('intro-container');
    const selectionScreen = document.getElementById('selection-screen');
    const dividerLine = document.getElementById('divider-line');
    
    const panelLeft = document.getElementById('panel-left');
    const panelRight = document.getElementById('panel-right');
    const zoomTransition = document.getElementById('zoom-transition');
    const profileContainer = document.getElementById('profile-container');

    // ==========================================
    // ✨ SISTEMA DE MODAL (POP-UP) ✨
    // ==========================================
    let personagemAtivo = null; 
    let idPersonagemAtivo = null; // ✨ Essencial para o lore.js saber qual personagem abrir

    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalHeader = document.getElementById('modal-header');
    const modalBody = document.getElementById('modal-body');

    modalClose.addEventListener('click', () => {
        modalOverlay.style.opacity = '0';
        setTimeout(() => modalOverlay.classList.add('hidden'), 500);
    });

    function abrirModal(titulo, chaveBanco, tipo = 'texto') {
        if (!personagemAtivo) return;
        
        modalHeader.innerHTML = titulo;
        modalBody.innerHTML = ''; 
        
        const conteudo = personagemAtivo[chaveBanco];

        if (tipo === 'texto') {
            modalBody.innerHTML = `<div class="modal-text-box">${conteudo || 'Informação não disponível.'}</div>`;
        } 
        else if (tipo === 'qa') {
            let html = '<div class="modal-qa-list">';
            if(conteudo && Array.isArray(conteudo) && conteudo.length > 0) {
                conteudo.forEach(item => {
                    html += `<div class="modal-qa-card">
                                <div class="qa-p">P: ${item.p}</div>
                                <div class="qa-r">R: ${item.r}</div>
                             </div>`;
                });
            } else {
                html += '<div class="modal-text-box">Nenhuma pergunta respondida.</div>';
            }
            html += '</div>';
            modalBody.innerHTML = html;
        } 
        else if (tipo === 'artes') {
            let html = '<div class="modal-gallery">';
            if(conteudo && Array.isArray(conteudo) && conteudo.length > 0) {
                conteudo.forEach(item => {
                    html += `<div class="modal-gallery-item">
                                <img src="${item.img}" alt="Arte">
                                <span>${item.artista}</span>
                             </div>`;
                });
            } else {
                html += '<div class="modal-text-box">Nenhuma arte disponível.</div>';
            }
            html += '</div>';
            modalBody.innerHTML = html;
        }
        else if (tipo === 'lista') {
            let html = '<div class="modal-list-container">';
            if(conteudo && Array.isArray(conteudo) && conteudo.length > 0) {
                conteudo.forEach(item => {
                    html += `<div class="modal-list-card">${item}</div>`;
                });
            } else {
                html += '<div class="modal-text-box">Nenhuma informação disponível.</div>';
            }
            html += '</div>';
            modalBody.innerHTML = html;
        }

        modalOverlay.classList.remove('hidden');
        setTimeout(() => modalOverlay.style.opacity = '1', 10);
    }

    // Cliques nos Botões Neon
    document.getElementById('btn-personalidade')?.addEventListener('click', () => abrirModal('☆ Personalidade ☆', 'personalidade', 'texto'));
    document.getElementById('btn-agradecimentos')?.addEventListener('click', () => abrirModal('AGRADECIMENTOS', 'agradecimentos', 'texto')); // ✨ Atualizado aqui
    document.getElementById('btn-gostos')?.addEventListener('click', () => abrirModal('Gostos', 'gostos', 'texto'));
    document.getElementById('btn-aprovacao')?.addEventListener('click', () => abrirModal('Aprovação', 'aprovacao', 'texto'));
    document.getElementById('btn-qa')?.addEventListener('click', () => abrirModal('Q & A', 'qa', 'qa'));
    document.getElementById('btn-artes')?.addEventListener('click', () => abrirModal('ARTES ✧', 'artes', 'artes'));
    document.getElementById('btn-ficha')?.addEventListener('click', () => abrirModal('FACE', 'face_texto', 'texto'));

    // ==========================================
    // ✨ LIGAÇÃO COM O LORE.JS (CAPÍTULOS) ✨
    // ==========================================
    const btnLerLore = document.getElementById('btn-ler-lore');
    btnLerLore?.addEventListener('click', () => {
        console.log("🔍 Botão Ler Lore clicado! ID Atual:", idPersonagemAtivo);
        
        if (idPersonagemAtivo && typeof window.abrirLore === 'function') {
            window.abrirLore(idPersonagemAtivo);
        } else {
            console.error("❌ ERRO: O ID do personagem está nulo ou a função abrirLore não foi encontrada!", { 
                idPersonagemAtivo: idPersonagemAtivo, 
                funcaoExiste: typeof window.abrirLore 
            });
        }
    });

    // ==========================================
    // RESTO DO CÓDIGO (Cursor, Estrelas, Transições)
    // ==========================================
    let rafAgendado = false;
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX; const mouseY = e.clientY;
        if (!rafAgendado) {
            requestAnimationFrame(() => {
                if (cursorDot && cursorGlow) { cursorDot.style.left = `${mouseX}px`; cursorDot.style.top = `${mouseY}px`; cursorGlow.style.left = `${mouseX}px`; cursorGlow.style.top = `${mouseY}px`; }
                if (starsBg) { const centerX = window.innerWidth / 2; const centerY = window.innerHeight / 2; const moveX = (mouseX - centerX) / -40; const moveY = (mouseY - centerY) / -40; starsBg.style.transform = `translate(${moveX}px, ${moveY}px)`; }
                rafAgendado = false;
            }); rafAgendado = true;
        }
    });

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('button, .char-img, .head-icon, .split-panel, .box-playlist iframe, .btn-face-futuro, #modal-close')) {
            if (cursorGlow) cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.5)';
            if (cursorDot) cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('button, .char-img, .head-icon, .split-panel, .box-playlist iframe, .btn-face-futuro, #modal-close')) {
            if (cursorGlow) cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
            if (cursorDot) cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });

    if (starsBg) {
        for (let i = 0; i < 80; i++) {
            let star = document.createElement('div'); star.className = 'intro-star';
            let size = Math.random() * 2 + 1; star.style.width = size + 'px'; star.style.height = size + 'px';
            star.style.left = Math.random() * 100 + 'vw'; star.style.top = Math.random() * 100 + 'vh'; star.style.animationDelay = Math.random() * 3 + 's';
            starsBg.appendChild(star);
        }
    }

    if (btnStart) {
        btnStart.addEventListener('click', () => {
            btnStart.classList.add('fade-out'); starsBg.style.opacity = '1';
            setTimeout(() => {
                const flapLeft = document.querySelector('.moon-flap-left'); const flapRight = document.querySelector('.moon-flap-right');
                const tempoMetade = configuracoes_animacao.tempoLua / 2; 
                if (flapLeft && flapRight) { flapLeft.style.animationDuration = `${tempoMetade}ms`; flapRight.style.animationDuration = `${tempoMetade}ms`; flapRight.style.animationDelay = `${tempoMetade}ms`; }
                moonWrapper.classList.remove('hidden'); moonWrapper.classList.add('start-anim'); 
                setTimeout(() => {
                    moonPhase.classList.add('kaboom');
                    setTimeout(() => {
                        introContainer.classList.add('camera-pan-down');
                        setTimeout(() => {
                            selectionScreen.classList.remove('hidden');
                            setTimeout(() => { selectionScreen.style.opacity = '1'; dividerLine.classList.add('show-divider'); }, 50);
                        }, 500);
                    }, configuracoes_animacao.tempoKaboom); 
                }, configuracoes_animacao.tempoLua); 
            }, 500);
        });
    }

    function carregarDadosPainel(char) {
        const artInteira = document.querySelector('.character-full-art');
        const painelArt = document.querySelector('.panel-left-art');
        
        let dinBg = document.getElementById('dynamic-bg');
        if (!dinBg && profileContainer) { dinBg = document.createElement('div'); dinBg.id = 'dynamic-bg'; profileContainer.prepend(dinBg); }
        if (dinBg) {
            const bgImg = char.background_img && char.background_img !== '' ? char.background_img : char.arte_corpo_inteiro;
            dinBg.style.backgroundImage = `url('${bgImg}')`;
            const blurValue = char.background_blur || '15px'; dinBg.style.filter = `blur(${blurValue})`;
        }

        if (artInteira && painelArt) {
            artInteira.style.backgroundImage = `url('${char.arte_corpo_inteiro}')`;
            painelArt.onmouseenter = null; painelArt.onmouseleave = null;
            if (char.arte_corpo_inteiro_hover && char.arte_corpo_inteiro_hover !== '') {
                painelArt.onmouseenter = () => artInteira.style.backgroundImage = `url('${char.arte_corpo_inteiro_hover}')`;
                painelArt.onmouseleave = () => artInteira.style.backgroundImage = `url('${char.arte_corpo_inteiro}')`;
            }
        }

        const boxPlaylist = document.querySelector('.box-playlist');
        if (boxPlaylist) {
            let playlistHTML = `<div class="playlist-header"><div class="playlist-dot"></div><h3 class="playlist-title">PLAYLIST</h3></div>`;
            if (char.playlist_link && char.playlist_link !== '') { playlistHTML += `<iframe src="${char.playlist_link}" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`; }
            boxPlaylist.innerHTML = playlistHTML;
        }
        
        const boxArteDireita = document.querySelector('.box-arte-lukea');
        if (boxArteDireita) {
            if (char.arte_card_direita && char.arte_card_direita !== '') { boxArteDireita.style.backgroundImage = `url('${char.arte_card_direita}')`; boxArteDireita.innerHTML = ''; } 
            else { boxArteDireita.style.backgroundImage = 'none'; boxArteDireita.innerHTML = '<h3>ARTE COM O PERSONAGEM DO LUKEA</h3>'; }
        }

const headLukea = document.querySelector('.head-lukea');
        if (headLukea) {
            headLukea.onmouseenter = null; headLukea.onmouseleave = null;
            if (char.icone_lukea && char.icone_lukea !== '') {
                headLukea.style.backgroundImage = `url('${char.icone_lukea}')`; headLukea.innerText = ''; 
                if (char.icone_lukea_hover && char.icone_lukea_hover !== '') { headLukea.onmouseenter = () => headLukea.style.backgroundImage = `url('${char.icone_lukea_hover}')`; headLukea.onmouseleave = () => headLukea.style.backgroundImage = `url('${char.icone_lukea}')`; }
            } else { headLukea.style.backgroundImage = 'none'; headLukea.innerText = 'LUKEA'; headLukea.style.color = '#fff'; }
        }

       document.querySelector('.head-lukea')?.addEventListener('click', () => {
        if (!personagemAtivo) return;
        
        modalHeader.innerHTML = 'Hélio';
        modalBody.innerHTML = 'SevyIMGS/ArteL.png'; 

        // Puxa o texto diretamente do objeto do personagem ativo no banco.js
        const textoDoBanco = personagemAtivo['lukea_texto'] || 'Texto não encontrado no banco.js.';

        // Cria a caixa de texto estilizada em verde (igualzinha ao modelo da sua foto, mas para leitura)
        modalBody.innerHTML = `
            <div class="modal-text-box" style="
                border-color: #00ff66; 
                box-shadow: 0 0 20px rgba(0, 255, 102, 0.3); 
                background: rgba(0, 10, 2, 0.95); 
                color: #00ff66; 
                overflow-y: auto; 
                max-height: 400px; 
                padding: 20px; 
                font-size: 15px; 
                line-height: 1.6;
            ">
                ${textoDoBanco}
            </div>
        `;

        modalOverlay.classList.remove('hidden');
        setTimeout(() => modalOverlay.style.opacity = '1', 10);
    });

        const headFicha = document.querySelector('.head-ficha');
        if (headFicha) {
            headFicha.onmouseenter = null; headFicha.onmouseleave = null;
            if (char.icone_ficha && char.icone_ficha !== '') {
                headFicha.style.backgroundImage = `url('${char.icone_ficha}')`; headFicha.innerText = '';
                if (char.icone_ficha_hover && char.icone_ficha_hover !== '') { headFicha.onmouseenter = () => headFicha.style.backgroundImage = `url('${char.icone_ficha_hover}')`; headFicha.onmouseleave = () => headFicha.style.backgroundImage = `url('${char.icone_ficha}')`; }
            } else { headFicha.style.backgroundImage = 'none'; headFicha.innerText = 'FICHA GERAL'; headFicha.style.color = '#fff'; }
        }

        const stAniversario = document.getElementById('stat-aniversario'); const stIdade = document.getElementById('stat-idade');
        const stAltura = document.getElementById('stat-altura'); const stGenero = document.getElementById('stat-genero');
        const stSigno = document.getElementById('stat-signo'); const stSexualidade = document.getElementById('stat-sexualidade');

        if (stAniversario) stAniversario.innerText = char.aniversario || '--';
        if (stIdade) stIdade.innerText = char.idade || '--';
        if (stAltura) stAltura.innerText = char.altura || '--';
        if (stGenero) stGenero.innerText = char.genero || '--';
        if (stSigno) stSigno.innerText = char.signo || '--';
        if (stSexualidade) stSexualidade.innerText = char.sexualidade || '--';
    }

    let emTransicao = false; 
    function ativarTransicao(personagemObj, corTransicao, elementoPainel, idChar) {
        if (emTransicao) return; emTransicao = true;
        personagemAtivo = personagemObj; 
        idPersonagemAtivo = idChar; // Salva o ID exato do personagem ('sevyek' ou 'nyev')
        
        carregarDadosPainel(personagemObj);
        const rect = elementoPainel.getBoundingClientRect(); const startX = rect.left + (rect.width / 2); const startY = rect.top + (rect.height / 2);

        zoomTransition.style.left = `${startX}px`; zoomTransition.style.top = `${startY}px`; zoomTransition.style.backgroundColor = corTransicao;
        zoomTransition.style.opacity = '1'; zoomTransition.style.transform = 'translate(-50%, -50%) scale(500)';
        introContainer.style.opacity = '0';

        setTimeout(() => {
            introContainer.classList.add('hidden');
            if (profileContainer) {
                profileContainer.classList.remove('hidden');
                setTimeout(() => { 
                    profileContainer.style.opacity = '1'; zoomTransition.style.opacity = '0';
                    setTimeout(() => { zoomTransition.style.transform = 'translate(-50%, -50%) scale(0)'; emTransicao = false; }, 800);
                }, 100);
            }
        }, 1000); 
    }

    if (panelLeft) { panelLeft.addEventListener('click', () => ativarTransicao(charEsquerda, charEsquerda.cor_principal, panelLeft, 'sevyek')); }
    if (panelRight) { panelRight.addEventListener('click', () => ativarTransicao(charDireita, charDireita.cor_principal, panelRight, 'nyev')); }
});

function ajustarEscalaDoPainel() {
    const painel = document.querySelector('.glass-panel');
    if (!painel) return;
    
    // Medidas cravadas no CSS para manter a proporção perfeita
    const larguraBase = 1400; 
    const alturaBase = 760;
    
    // Margem confortável à volta (90%)
    const larguraTela = window.innerWidth * 0.90;
    const alturaTela = window.innerHeight * 0.90;
    
    // Calcula a escala ideal sem cortar nada
    let escala = Math.min(larguraTela / larguraBase, alturaTela / alturaBase);
    
    // Trava para não esticar de forma exagerada em ecrãs gigantes
    if (escala > 1) {
        escala = 1;
    }
    
    painel.style.transform = `scale(${escala})`;
}

window.addEventListener('resize', ajustarEscalaDoPainel);
document.addEventListener('DOMContentLoaded', ajustarEscalaDoPainel);

