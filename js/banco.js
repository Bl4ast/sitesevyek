// ==========================================
// BANCO DE DADOS - LORE & CONFIGURAÇÕES
// ==========================================

const configuracoes_animacao = {
    tempoLua: 1800,   
    tempoKaboom: 1000 
};

const personagens = {
    'sevyek': {  
        nome: '',
        cor_principal: '#0e257e',
        avatar: 'SevyIMGS/ArteIni.png', 
        
        arte_corpo_inteiro: 'SevyIMGS/Corpo Inteiro.png',
        arte_corpo_inteiro_hover: 'SevyIMGS/Corpo Inteiro.png', 
        background_img: 'SevyIMGS/Back3.jpg', 
        background_blur: '15px', 
        
        arte_card_direita: 'SevyIMGS/sevicklukwa.png', 
        playlist_link: 'https://open.spotify.com/embed/playlist/760x2y3nCErPKjOK6xDZlT?utm_source=generator&si=f477ee35375f4598',
        
        texto_principal: '',
        
        personalidade: `
    <p>ㅤHyacine é alguém que gosta de compreender as coisas ao seu redor, sua mente está sempre ocupada com perguntas, possibilidades e pensamentos sobre aquilo que ainda não aconteceu... ele tem uma curiosidade natural sobre o mundo e costuma enxergar o futuro como algo que pode ser explorado, quase como um caminho cheio de escolhas que levam a lugares diferentes. No entanto, essa mesma curiosidade também se transforma em inquietação quando percebe que nem tudo pode ser previsto ou compreendido, principalmente quando envolve as pessoas que ama.</p>

    <p>ㅤHyacine é uma pessoa curiosa, observadora e bastante questionadora. Ele gosta de compreender como as coisas funcionam, conhecer ideias diferentes e procurar respostas para aquilo que não entende, dificilmente se contenta com uma explicação apenas porque alguém a apresentou como verdade, principalmente quando percebe contradições entre aquilo que lhe ensinaram e aquilo que testemunha.</p>

    <p>ㅤDesde pequeno, tem o hábito de imaginar possibilidades e fazer perguntas sobre o que ainda está por vir, costuma pensar em como suas escolhas podem influenciar os acontecimentos, o que o leva a considerar diferentes caminhos antes de tomar uma decisão... para ele, compreender alguma coisa significa também tentar entender o que ela pode se tornar. Apesar de sua curiosidade, Hyacine não é alguém que se sente completamente confortável diante da incerteza, ele gosta de imaginar o futuro enquanto ele permanece distante, mas se inquieta quando percebe que as mudanças podem acontecer sem aviso e que nem sempre terá tempo para se preparar. Por isso, muitas vezes tenta encontrar explicações para situações que talvez não tenham uma resposta simples.</p>

    <p>ㅤEle é bastante ligado às pessoas que ama, especialmente ao irmão, Hyacine demonstra seu carinho principalmente por meio da presença, da atenção e da disposição para acompanhar alguém mesmo quando não sabe exatamente o que dizer, não sente que precisa preencher todos os silêncios com palavras... para ele, permanecer ao lado de alguém durante um momento difícil também é uma forma de demonstrar afeto.</p>

    <p>ㅤHyacine tem dificuldade em assistir ao sofrimento de alguém importante sem sentir que deveria fazer alguma coisa. Mesmo quando compreende racionalmente que não pode resolver todos os problemas, uma parte dele continua procurando alguma maneira de ajudar. Isso acontece porque ele se importa profundamente com as pessoas próximas e tem medo de descobrir tarde demais que poderia ter feito algo diferente.</p>

    <p>ㅤEmbora seja alguém que gosta de pensar e procurar respostas, Hyacine também possui um lado sensível que nem sempre consegue expressar... ele pode passar muito tempo refletindo sobre o que sente antes de conseguir colocar aquilo em palavras. Em alguns momentos, prefere organizar os próprios pensamentos em silêncio, tentando compreender a origem de suas emoções antes de compartilhá-las com alguém.</p>

    <p>ㅤSua relação com a fé é marcada por uma necessidade constante de compreender aquilo em que acredita, Hyacine não deseja abandonar tudo o que aprendeu apenas porque encontrou algo que contradiz seus ensinamentos, mas também não consegue aceitar uma injustiça simplesmente porque ela foi justificada pela religião, ele procura distinguir suas próprias crenças das interpretações daqueles que dizem representá-las.</p>

    <p>ㅤEssa característica faz com que seja alguém capaz de questionar autoridades e tradições quando percebe que existe algo errado, Hyacine não costuma se revoltar sem motivo, sua indignação cresce principalmente quando percebe que o sofrimento de alguém está sendo tratado como algo necessário, honroso ou inevitável, sem que ninguém se preocupe com a pessoa que realmente está sofrendo.</p>

    <p>ㅤApesar de ter escolhido a Aceitação, Hyacine não é alguém que consegue aceitar tudo com facilidade, na verdade, essa escolha representa muito mais uma tentativa de compreender aquilo que não pode mudar do que uma ausência de medo ou resistência. Ele quer aprender a conviver com as perdas sem permitir que elas determinem completamente a maneira como continuará vivendo.</p>

    <p>ㅤHyacine também pode ser teimoso quando acredita que precisa encontrar uma resposta, quando uma questão passa a incomodá-lo, é difícil simplesmente deixá-la de lado, ele pesquisa, observa, compara informações e retorna ao mesmo assunto repetidas vezes, como se compreender o problema pudesse ajudá-lo a recuperar uma sensação de segurança... essa insistência, porém, pode fazer com que ele se prenda demais aos próprios pensamentos, em vez de viver uma situação conforme ela acontece, Hyacine pode começar a imaginar todas as consequências possíveis, antecipando problemas que talvez nunca existam. Às vezes, acaba se preocupando tanto com o que poderá acontecer que se esquece de prestar atenção naquilo que está acontecendo diante dele.</p>

    <p>ㅤQuando está assustado, sua primeira reação nem sempre é demonstrar medo, ele tende a procurar explicações, formular perguntas e tentar encontrar alguma coisa que possa fazer. Pensar lhe oferece uma sensação de controle, e reconhecer que não existe uma solução imediata pode ser muito mais difícil para ele do que enfrentar uma situação dolorosa.</p>

    <p>ㅤHyacine é alguém que valoriza muito as lembranças, embora tenha uma relação complicada com elas... ele gosta de recordar os momentos em que sua vida parecia mais simples, especialmente aqueles que compartilhou com Hélio. Entretanto, também compreende que não pode permanecer preso àquilo que existia antes das mudanças, uma parte dele deseja preservar o passado, enquanto outra tenta aprender a continuar vivendo depois dele. Com o passar do tempo, sua curiosidade sobre o futuro pode se transformar em uma necessidade de encontrar uma possibilidade em que as pessoas que ama não precisem sofrer, ele começa a considerar cada escolha como uma oportunidade de alcançar um resultado melhor, acreditando que talvez exista algum caminho capaz de impedir determinadas perdas. O problema é que, quanto mais tenta encontrar esse caminho, mais difícil se torna aceitar que nem todas as coisas dependem de suas decisões.</p>
`,
        curiosidades: `
    <p>ㅤA história foi desenvolvida com auxílio da escritora @kyuumisa. Foi revisada por @asterlayli e eu!</p> 
    <p>ㅤPara ser feita e chegar como chegou, criei um Miro com toooodas as ideias que tive inicialmente para poder colocar na mesa! Segue aqui o link:</p> 
    <p><a href="https://miro.com/welcomeonboard/dXF6WDB6bnV5ZkZ5YUtONVF0NURWdVd4aTRqQkpoNGg3ODRQKzRKdXJKYzkzRmV6TFZyM0kxUGRSNUxhVTQ1Ly9RR0hrNTNUTU9QNVdUalJvR2RJbGRWQkRlanhLQWxzc01taHRQQjFMNXI3QXRoLzNmU2tyb2pmQmt5K2NoNk13VHhHVHd5UWtSM1BidUtUYmxycDRnPT0hdjE=?share_link_id=593397205030" target="_blank" style="color: var(--theme-color, #00e5ff); text-decoration: underline;"> LINK</a></p>
`,      agradecimentos: `
            <p>ㅤA história foi desenvolvida com auxílio da escritora @kyuumisa. Foi revisada por @asterlayli e eu!</p> 
            <p>ㅤPara ser feita e chegar como chegou, criei um Miro com toooodas as ideias que tive inicialmente para poder colocar na mesa! Segue aqui o link:</p> 
            <p><a href="https://miro.com/welcomeonboard/dXF6WDB6bnV5ZkZ5YUtONVF0NURWdVd4aTRqQkpoNGg3ODRQKzRKdXJKYzkzRmV6TFZyM0kxUGRSNUxhVTQ1Ly9RR0hrNTNUTU9QNVdUalJvR2RJbGRWQkRlanhLQWxzc01taHRQQjFMNXI3QXRoLzNmU2tyb2pmQmt5K2NoNk13VHhHVHd5UWtSM1BidUtUYmxycDRnPT0hdjE=?share_link_id=593397205030" target="_blank" style="color: var(--theme-color, #00e5ff); text-decoration: underline;"> LINK</a></p>
        `,
        gostos: '<h1>︵ ₊ 𝐎bs͟e͟rva͟r a͟s est͟r͟el͟as</h1> <p>ㅤHyacine sempre admirou a beleza dos céus, reconhece que, não importa onde esteja, ele e seu irmão ainda poderão contemplar aqueles pequenos pontos de luz ao anoitecer. Gosta de observá-los brilhando no céu, especialmente quando pensa que todos aqueles que já deixaram de caminhar por esta terra continuam a observá-los através das estrelas.</p>  <p>ㅤPara ele, cada constelação que parece formar um pequeno desenho, ele adora apontar para cada estrela e traçar seus caminhos com os olhos, unindo uma a uma até enxergar a figura que se esconde entre elas. </p>  <h1>︵ ₊ 𝐄st͟u͟da͟r</h1> <p>ㅤHyacine gosta bastante de estudar e desenvolveu seu carinho pelo conhecimento desde o momento em que precisou se aprofundar nos registros de Berithara para descobrir mais sobre o ritual do Olho Velado... mesmo que as circunstâncias não tenham sido das melhores, foi durante essa busca que passou a descobrir cada vez mais sobre o mundo ao seu redor.</p> <p>ㅤDesde então, Hyacine passou a questionar tudo, sempre querendo entender o porquê, o como e o motivo por trás de cada coisa. Para ele, conhecimento nunca é demais.</p>',
        desgostos: 'Pessoas arrogantes, dias chuvosos, perder.',
        
        qa: [
            { p: 'Você acredita que o futuro já está escrito?', r: 'Às vezes, acredito que sim...? Já vi tantas possibilidades se desenrolarem diante de mim que é difícil não pensar que algumas coisas estão destinadas a acontecer. ' },
            { p: 'O que você mais gostaria de descobrir?', r: 'Uma resposta definitiva! Algo que me permitisse olhar para frente sem precisar me perguntar se escolhi o caminho certo, embora... talvez eu só esteja procurando uma certeza que não existe.' },
            { p: 'Qual é a coisa mais bonita que já viu?', r: 'Existem muitas respostas para essa pergunta, mas acho que escolheria uma lembrança... im momento simples, daqueles que parecem insignificantes enquanto acontecem, provavelmente envolvendo o meu irmão!' },
            { p: 'Você tem medo de envelhecer?', r: 'Não exatamente... o que me assusta é chegar a uma idade e perceber que passei tanto tempo tentando prever o amanhã que me esqueci de viver o hoje.' }
        ],
        
        artes: [
            { img: 'SevyIMGS/arte1.jpg', artista: 'Artista ' },
            { img: 'SevyIMGS/arte2.jpg', artista: 'Artista ' },
            { img: 'SevyIMGS/arte3.jpg', artista: 'Artista ' }
        ],
        face_texto: '<p>ㅤHyacine se encaixa na Face do Futuro por sua necessidade constante de compreender aquilo que ainda não aconteceu, seus sonhos permitem que ele contemple diferentes versões de sua vida, vivenciando possibilidades que se estendem por décadas e chegando a experimentar realidades nas quais suas escolhas conduzem a resultados completamente distintos. Essa experiência, entretanto, torna cada vez mais difícil distinguir as lembranças que realmente lhe pertencem daquelas construídas em seus sonhos, sua relação com o futuro não é motivada apenas pela curiosidade, mas também pelo medo de perder aquilo que considera precioso... Hélio, seu irmão, ocupa um lugar central nessa preocupação, tornando-se uma das principais razões pelas quais Hyacine insiste em procurar caminhos alternativos. Ao imaginar futuros nos quais algo terrível acontece com aqueles que ama, ele sente a necessidade de encontrar uma possibilidade diferente, uma realidade em que possa evitar o sofrimento, essa busca, porém, acaba se tornando uma prisão. Hyacine tem dificuldade em abandonar uma possibilidade quando acredita que ainda existe alguma maneira de modificá-la, mesmo diante de situações que não pode controlar, continua procurando respostas, revisitando cenários e tentando compreender o que poderia ter feito de outra forma. A esperança de encontrar um futuro melhor, que inicialmente o incentiva a seguir em frente, também pode impedi-lo de reconhecer os limites de suas próprias escolhas.</p> <p>ㅤOutro aspecto que o aproxima dessa Face é sua relação contraditória com o destino, embora deseje acreditar que suas ações podem alterar os acontecimentos, Hyacine também teme que determinadas coisas estejam destinadas a ocorrer, independentemente de seus esforços... essa incerteza alimenta sua ansiedade, se o futuro pode ser mudado, ele precisa encontrar a escolha correta, se é imutável, precisa aprender a conviver com aquilo que já viu.</p>',
        aprovacao: '<p>ㅤAcredito que tenho bastante a desenvolver com Hyacine dentro do projeto, tanto em relação às entidades quanto às interações com os outros jogadores... tenho bastante interesse em explorar a ideia de um personagem curioso, mas que também possui um lado paranoico, principalmente pela maneira como isso pode influenciar suas escolhas, seus pensamentos e a forma como ele interpreta as situações ao seu redor. Também gostaria de desenvolver melhor a relação dele com meu atual parceiro, Aster! Acho que essa será uma oportunidade muito interessante para construirmos uma dinâmica juntos e explorarmos como nossos personagens podem influenciar um ao outro ao longo da história.</p> <p>ㅤAlém disso, tenho muita vontade de conhecer melhor o projeto e seu universo, gostei bastante das mecânicas apresentadas e fiquei com vontade de explorar tudo o que elas podem proporcionar para a construção do personagem... acredito que, com o tempo livre que tenho disponível, conseguirei me dedicar bastante à busca por informações e à exploração da lore, encontrando detalhes que possam contribuir para o desenvolvimento de Hyacine. No geral, vejo muito potencial para trabalhar diferentes aspectos do personagem, criar relações e contribuir com pequenas ideias e construções dentro do universo.</p>',

        aniversario: '01 de janeiro',
        idade: '25 Anos',
        altura: '1,60',
        genero: 'Masculino, FTM',
        signo: 'Capricórnio',
        sexualidade: 'Pansexual',
        
        icone_lukea: 'SevyIMGS/ArteL.png', 
        
        // ✨ AQUI ESTÁ A IMAGEM NORMAL E A IMAGEM HOVER (COM A LUA) ✨
        icone_ficha: 'SevyIMGS/Fichageral.png',
        icone_ficha_hover: 'SevyIMGS/FichaLua.png' // Coloque o nome correto da sua arte com a lua aqui!
    },
    'nyev': { 
        nome: 'PERSO LUKEA',
        cor_principal: '#15ecaa',
        avatar: 'LukeaIMGS/Nn sei.png', 
        
        arte_corpo_inteiro: 'LukeaIMGS/CorpoInteiro.png',
        arte_corpo_inteiro_hover: 'LukeaIMGS/CorpoInteiroHover.png', 
        background_img: '',
        background_blur: '15px',
        
        arte_card_direita: '', 
        playlist_link: 'https://open.spotify.com/embed/playlist/...',
        
        texto_principal: 'TEXTO BLA BLA BLA',
        
        personalidade: 'Personalidade do Lukea aqui...',
        curiosidades: 'Curiosidades do Lukea...',
        gostos: 'Comida picante, treinar, lugares altos.',
        aprovacao: 'Coloque aqui o que ele aprova.', // ✨ Novo
        face_texto: 'Aqui fica o texto sobre a Face do Hyacine...', // ✨ Novo
        
        qa: [
            { p: 'PERGUNTA 1?', r: 'Resposta 1.' }
        ],
        artes: [
            { img: 'LukeaIMGS/arte1.png', artista: '@artista1' }
        ],
        
        aniversario: '21/09',
        idade: '??',
        altura: '1,81m',
        genero: 'Masculino',
        signo: 'Virgem',
        sexualidade: '??',
        
        icone_lukea: '', 
        icone_ficha: '',
        icone_ficha_hover: ''
    }
};
