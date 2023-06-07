const nomes = [
  "Alessandra",
  "Alice",
  "Aline",
  "Amanda",
  "Ana",
  "Andressa",
  "Andreza",
  "Bárbara",
  "Beatriz",
  "Bianca",
  "Bruna",
  "Camila",
  "Carla",
  "Carolina",
  "Caroline",
  "Cecília",
  "Clara",
  "Cristina",
  "Daiane",
  "Daniela",
  "Débora",
  "Eduarda",
  "Elaine",
  "Elen",
  "Eliana",
  "Eliciane",
  "Elis",
  "Elisângela",
  "Elisete",
  "Eloá",
  "Emanuela",
  "Emília",
  "Emily",
  "Érica",
  "Evelyn",
  "Fabiana",
  "Fernanda",
  "Flávia",
  "Gabriela",
  "Giovana",
  "Gisele",
  "Glória",
  "Helena",
  "Ingrid",
  "Isabel",
  "Isabella",
  "Isadora",
  "Isis",
  "Ivete",
  "Jaqueline",
  "Jéssica",
  "Joana",
  "Joice",
  "Júlia",
  "Juliana",
  "Jussara",
  "Kamila",
  "Karen",
  "Karina",
  "Kátia",
  "Lais",
  "Lana",
  "Larissa",
  "Laryssa",
  "Laura",
  "Layane",
  "Leda",
  "Letícia",
  "Lia",
  "Lilian",
  "Lívia",
  "Lorena",
  "Luana",
  "Lucélia",
  "Luciana",
  "Luciene",
  "Luiza",
  "Luma",
  "Luzia",
  "Márcia",
  "Mariana",
  "Marília",
  "Marina",
  "Marta",
  "Mary",
  "Mayara",
  "Melissa",
  "Michele",
  "Milena",
  "Mirian",
  "Monique",
  "Naiara",
  "Natália",
  "Nathalia",
  "Nicole",
  "Núbia",
  "Olívia",
  "Pamela",
  "Patrícia",
  "Paula",
  "Paulina",
  "Poliana",
  "Priscila",
  "Rafaela",
  "Raimunda",
  "Raissa",
  "Rayane",
  "Renata",
  "Roberta",
  "Rosana",
  "Rúbia",
  "Sabrina",
  "Samanta",
  "Sandra",
  "Sarah",
  "Sara",
  "Silvana",
  "Silvia",
  "Simone",
  "Sofia",
  "Sônia",
  "Stefany",
  "Stephanie",
  "Sueli",
  "Suzana",
  "Tainara",
  "Talita",
  "Tâmara",
  "Tatiana",
  "Thaís",
  "Valéria",
  "Vanessa",
  "Vera",
  "Verônica",
  "Victória",
  "Vitória",
  "Wanessa",
  "Yasmin",
  "Yasmim",
  "Yara",
  "Yasmin",
  "Zélia",
];

const comentarios = [
  "Adorei o vídeo! Tá muito interessante! 👏👏👏",
  "Eu não consigo parar de assistir! 😍😍😍",
  "Esse vídeo está me deixando animada e motivada! 💪💃",
  "Gostei muito do que você está compartilhando aqui! Valeu a pena assistir! 😊",
  "Esse vídeo é demais! Estou aprendendo muito! 🤓",
  "Adorei as dicas! Vou colocá-las em prática! 🙌",
  "Muito bom esse vídeo! Parabéns pelo conteúdo! 👍",
  "Que legal esse vídeo! Me fez refletir sobre várias coisas! 😃",
  "Incrível como esse vídeo está me inspirando! 🤩",
  "Tá top esse vídeo! 👌",
  "Esse vídeo está me ajudando muito a mudar minha perspectiva sobre muitas coisas! 😌",
  "Eu não sabia que tinha tanto para aprender sobre esse assunto! Obrigada pelo vídeo! 🤗",
  "Parabéns pelo conteúdo! Estou amando! 😍",
  "Esse vídeo é muito bom! Aprendi coisas novas e importantes! 🧐",
  "Você explica muito bem! Estou entendendo tudo direitinho! 😊",
  "Adoro vídeos assim, que me fazem pensar e aprender! 😃",
  "Estou amando o vídeo! Muito informativo e interessante! 🤓",
  "Esse vídeo está me deixando animada e motivada para mudar algumas coisas na minha vida! 💪💃",
  "Muito legal esse vídeo! Valeu a pena assistir! 👏👏👏",
  "Que bacana! Não sabia que esse assunto era tão importante! 🤔",
  "Já vi vários vídeos sobre esse tema, mas esse está sendo um dos melhores! 😍",
  "Adorei as dicas! Vou compartilhar com minhas amigas! 🤗",
  "Esse vídeo é muito interessante e informativo! 👍",
  "Tá demais esse vídeo! Parabéns pelo trabalho! 🙌",
  "Estou impressionada com o que estou aprendendo nesse vídeo! 🤩",
  "Nossa, esse vídeo está me dando muita esperança de recuperar meu casamento! Obrigada por compartilhar suas dicas!",
  "Estou amando esse vídeo! Não vejo a hora de colocar em prática tudo o que estou aprendendo para transformar meu relacionamento!",
  "Cada dica que você dá é como um sopro de esperança para mim! Estou animada para aplicar tudo isso no meu casamento!",
  "Esse vídeo está me fazendo repensar várias coisas no meu relacionamento. Obrigada por compartilhar seu conhecimento!",
  "Estou completamente envolvida nesse vídeo! É tão bom saber que não estou sozinha nessa busca por transformar meu casamento!",
  "Eu nunca imaginei que poderia mudar tanto meu relacionamento com algumas dicas simples. Obrigada por compartilhar seu conhecimento!",
  "Você tem toda razão! Estou pronta para agir e recuperar meu casamento! Obrigada por compartilhar essas informações valiosas!",
  "Estou com muita vontade de aplicar tudo o que estou aprendendo nesse vídeo no meu casamento. Acho que finalmente encontrei a solução para nossos problemas!",
  "Não consigo parar de assistir esse vídeo! É como se todas as minhas dúvidas estivessem sendo respondidas de uma vez por todas!",
  "Esse vídeo é como um manual para transformar meu relacionamento! Estou muito grata por ter encontrado essas informações!",
  "Muito obrigada por compartilhar suas experiências e conhecimentos nesse vídeo. Estou ansiosa para colocar tudo em prática!",
  "Estou completamente viciada nesse vídeo! Nunca imaginei que poderia transformar tanto meu relacionamento com algumas dicas simples!",
  "Esse vídeo está me dando muita esperança de reacender a chama do romance no meu casamento. Estou muito grata por ter encontrado essas informações!",
  "Cada vez que assisto esse vídeo, fico mais animada e confiante para transformar meu casamento. Obrigada por compartilhar seu conhecimento!",
  "Obrigada por me mostrar que é possível recuperar um relacionamento que parecia perdido. Estou muito animada para colocar tudo em prática!",
  "Esse vídeo está me fazendo repensar muitas coisas no meu casamento. Obrigada por compartilhar seu conhecimento!",
  "Estou com muita vontade de aplicar tudo o que estou aprendendo nesse vídeo para transformar meu casamento. Obrigada por compartilhar suas dicas!",
  "Você não tem ideia do quanto esse vídeo está me ajudando a lidar com meus problemas de relacionamento. Muito obrigada por compartilhar seu conhecimento!",
  "Esse vídeo está me dando muita coragem para enfrentar as dificuldades do meu relacionamento. Estou muito grata por ter encontrado essas informações!",
  "Cada palavra desse vídeo está me fazendo pensar em como posso mudar meu casamento para melhor. Obrigada por compartilhar essas dicas valiosas!",
  "Estou com muita vontade de colocar em prática tudo o que estou aprendendo nesse vídeo. Acho que finalmente encontrei a solução para nossos problemas!",
  "Não tenho palavras para agradecer o quanto esse vídeo está me ajudando a lidar com as dificuldades do meu relacionamento. Obrigada por compartilhar seu conhecimento!",
  "Estou completamente encantada com as dicas desse vídeo! É incrível como algumas pequenas mudanças podem fazer tanta diferença no nosso relacionamento!",
  "Esse vídeo é como uma luz no fim do túnel para mim. Estou muito grata por ter encontrado essas informações!",
  "Não posso deixar de dizer o quanto esse vídeo está me fazendo rir! Adoro seu jeito descontraído de apresentar as dicas!",
  "Esse vídeo está me ajudando a perceber que não estou sozinha nessa jornada de transformar meu relacionamento. Obrigada por compartilhar suas experiências!",
  "Estou completamente apaixonada por esse vídeo! É tão bom saber que ainda há esperança para meu relacionamento!",
  "Adorei as dicas desse vídeo! É como se você estivesse falando diretamente comigo e entendendo todas as minhas preocupações!",
  "Esse vídeo é exatamente o que eu precisava para recuperar meu relacionamento. Obrigada por compartilhar seu conhecimento!",
  "Estou com muita vontade de experimentar todas as dicas desse vídeo no meu casamento. Acho que finalmente encontrei a solução para nossos problemas!",
  "Esse vídeo está me dando muitas ideias de como posso reacender a chama do romance no meu casamento. Estou muito grata por ter encontrado essas informações!",
  "Amei o vídeo! Eu preciso aprender a melhorar a comunicação com meu marido, está sendo difícil ultimamente. 😔",
  "Esse vídeo está me ajudando muito a saber como perdoar e seguir em frente com meu marido. Obrigada! 🙏",
  "Eu preciso de mais surpresas na minha vida, meu marido e eu estamos precisando apimentar nossa relação. 😜",
  "Que vídeo incrível! Aprendi tanto sobre como agradar meu marido e melhorar nosso relacionamento. 💖",
  "Nunca imaginei que um vídeo pudesse me ajudar tanto assim a transformar meu relacionamento. Muito obrigada! 🤗",
  "Eu estava prestes a desistir do meu casamento, mas depois de ver esse vídeo, estou com muita esperança de que as coisas podem mudar. 🙌",
  "Adorei o vídeo, me ajudou a entender melhor as necessidades do meu marido e como posso atendê-las. 😍",
  "Esse vídeo é exatamente o que eu precisava para aprender como melhorar a minha relação com meu marido. Muito obrigada! 🌸",
  "Eu sou péssima em fazer surpresas, mas depois de ver esse vídeo, tenho certeza de que vou surpreender meu marido em breve! 😂",
  "Obrigada por esse vídeo incrível! Aprendi muito sobre como melhorar a comunicação e resolver conflitos no meu relacionamento. 🤝",
  "Eu quero muito aprender a perdoar meu marido e seguir em frente com ele. Esse vídeo está me ajudando muito nisso. 🙏",
  "Eu já tentei de tudo para melhorar meu relacionamento, mas esse vídeo me mostrou coisas que eu nunca tinha pensado antes. Muito obrigada! 🌟",
  "Eu preciso aprender a agradar meu marido mais, e esse vídeo me deu várias dicas incríveis! 👏",
  "Esse vídeo me ensinou que pequenos gestos podem fazer toda a diferença em um relacionamento. Estou ansiosa para colocar em prática! 💕",
  "Amei as dicas desse vídeo, principalmente sobre como fazer surpresas simples e criativas para meu marido. 🎉",
  "Esse vídeo me mostrou que a chave para um relacionamento feliz é a comunicação. Obrigada por compartilhar essas dicas valiosas! 🤗",
  "Eu estou precisando muito aprender a perdoar e deixar as mágoas para trás. Esse vídeo está me ajudando muito nisso. 🙏",
  "Eu sempre quis ser uma pessoa que faz surpresas incríveis para o marido, e agora eu sei como! Obrigada por esse vídeo maravilhoso! 😍",
  "Eu estou muito animada para colocar em prática as dicas desse vídeo e ver como meu relacionamento pode melhorar. 💪",
  "Eu estou amando esse vídeo! Muitas dicas valiosas para melhorar o meu relacionamento com o meu marido. 😘",
  "Que vídeo incrível! Eu nunca tinha pensado em algumas dessas dicas para melhorar a minha relação com meu marido. Muito obrigada!",
  "Eu sempre soube que a comunicação é importante em um relacionamento, mas esse vídeo me mostrou como fazer isso da maneira certa. 🗣️",
  "Esse vídeo me lembrou que eu preciso ser mais paciente e compreensiva com o meu marido. Vou colocar em prática agora mesmo! 😊",
  "Eu adoro fazer surpresas para o meu marido, e esse vídeo me deu ideias incríveis para fazer isso com mais frequência! 🎁",
  "Amei esse vídeo! Ele me fez perceber que o perdão é uma parte importante de qualquer relacionamento. 🙏",
  "Eu nunca tinha pensado em algumas dessas dicas para melhorar a minha relação com meu marido. Obrigada por compartilhar! 🤗",
  "Esse vídeo me mostrou que não é difícil agradar o meu marido, basta prestar atenção nas pequenas coisas que ele gosta. 💖",
  "Eu sempre tive dificuldade em resolver conflitos com o meu marido, mas esse vídeo me deu várias dicas para fazer isso de maneira saudável. 🤝",
  "Eu amo assistir vídeos como esse, que me ajudam a aprender e crescer como pessoa e como esposa. Obrigada por compartilhar! 🌟",
  "Esse vídeo me fez perceber que a chave para um relacionamento feliz é a empatia e a compreensão. Vou praticar mais isso com meu marido! 💕",
  "Amei as dicas desse vídeo! Agora eu sei como fazer surpresas incríveis para o meu marido e deixar ele ainda mais apaixonado por mim. 😍",
  "Nossa, esse vídeo é tudo o que eu precisava! Quero muito sentir aquela paixão do início do casamento de volta! 😍❤️",
  "Tô adorando esse vídeo, tô precisando demais reacender a chama da minha relação! 🔥🌹",
  "Amei as dicas desse vídeo! Tô louca pra colocar em prática e sentir tudo aquilo de novo! 🤩💕",
  "Só de pensar em recuperar a confiança no meu parceiro já me deixa tão feliz! Obrigada por esse vídeo maravilhoso! 🙏🏻💖",
  "Gente, esse vídeo tá incrível! Tô doida pra sentir aquele frio na barriga de novo! 😍🥰",
  "Nossa, eu preciso MUITO recuperar a paixão do começo do meu relacionamento! Valeu demais pelas dicas! 🙌🏻💜",
  "Amei as dicas sobre como ter mais prazer na cama, tô ansiosa pra experimentar! 🛌😏",
  "Esse vídeo me deixou com ainda mais vontade de investir no meu relacionamento e recuperar o que se perdeu! 🌹❤️",
  "A confiança é algo tão importante em um relacionamento, tô muito feliz por ter encontrado esse vídeo! 🙏🏻💖",
  "Tô precisando desesperadamente sentir aquele frio na barriga de novo, esse vídeo veio em boa hora! 😍💕",
  "Adorei as dicas do vídeo, tô animada pra ver a diferença que elas vão fazer no meu relacionamento! 🤞🏻💜",
  "Tô precisando muito recuperar a paixão que tinha no início, esse vídeo me deu esperanças! 🙏🏻❤️",
  "Obrigada pelas dicas incríveis, tô animada pra botar tudo em prática e recuperar a segurança no meu relacionamento! 🌹💪🏻",
  "Esse vídeo tá sendo uma verdadeira luz no fim do túnel pra mim, tô muito grata por ter encontrado! 🙌🏻💖",
  "Amei as dicas sobre como ter mais prazer na cama, tô animada pra tentar com o meu parceiro! 🛌😉",
  "Estou precisando muito recuperar a segurança que tinha na minha relação, esse vídeo é exatamente o que eu precisava! 🙏🏻💜",
  "Tô adorando o vídeo e as dicas incríveis! Quero muito sentir tudo o que sentia no início do meu relacionamento de novo! 😍❤️",
  "Esse vídeo tá me deixando com tanta esperança de recuperar a paixão que se perdeu, muito obrigada! 🌹💖",
  "Obrigada pelas dicas incríveis, tô louca pra botar tudo em prática e ter de volta aquela paixão gostosa! 🙌🏻😍",
  "Nossa, esse vídeo é tudo o que eu precisava pra reacender a chama do meu relacionamento! Tô amando! 🔥❤️",
  "A confiança no meu parceiro é algo que sempre busquei, e agora com as dicas desse vídeo, acho que vou conseguir! 🤞🏻💜",
  "Esse vídeo tá me dando tanta inspiração e motivação pra investir no meu relacionamento, muito obrigada! 🌹💪🏻",
  "Amei as dicas sobre como ter mais prazer na cama, tô doida pra experimentar tudo com o meu parceiro! 🛌😏",
  "Esse vídeo tá me deixando com tanta vontade de recuperar a paixão do começo, mal posso esperar pra ver os resultados! 😍🙏🏻",
  "Obrigada pelas dicas incríveis, tenho certeza que vão fazer toda a diferença na minha relação! 🌹💖",
  "Esse vídeo veio na hora certa! Preciso de ajuda para reacender a chama do meu casamento. 💕",
  "Não aguento mais essa rotina no meu relacionamento, preciso de dicas urgentes! 🆘",
  "Amei as dicas do vídeo! Já quero colocar em prática e melhorar meu relacionamento. 💪",
  "Fiquei emocionada com o conteúdo, me identifiquei muito. Muito obrigada por compartilhar essas informações valiosas. 🙏",
  "Como eu faço para adquirir o conteúdo completo? Preciso disso para salvar meu casamento. 🤞",
  "Já tentei de tudo para melhorar meu relacionamento, mas nada funcionou. Será que esse vídeo pode me ajudar? 🤔",
  "Sofro muito com a falta de romance no meu casamento, preciso mudar isso. Obrigada pelas dicas! ❤️",
  "Aprendi muito com esse vídeo, agora sei como melhorar a comunicação com meu parceiro. 😍",
  "Achei incrível a forma como o vídeo aborda os problemas que enfrentamos nos relacionamentos. Parabéns pelo trabalho! 👏",
  "Não sabia mais o que fazer para melhorar meu casamento, mas agora tenho esperança. Vou seguir as dicas do vídeo! 🤞",
  "Obrigada por compartilhar essas dicas valiosas, tenho certeza de que vão ajudar muitas mulheres. 💕",
  "Preciso de ajuda urgente para salvar meu casamento, acho que esse vídeo pode ser a solução. Como faço para adquirir? 🆘",
  "É muito bom saber que não estou sozinha nessa luta para melhorar meu relacionamento. Obrigada pelas dicas! 🙏",
  "Adorei o conteúdo do vídeo, muito esclarecedor e inspirador. 😍",
  "Estou muito interessada em adquirir o conteúdo completo para melhorar meu casamento. Como faço? 🤔",
  "Já tentei de tudo para reacender a chama do romance no meu relacionamento, mas nada funcionou. Será que esse vídeo pode me ajudar? 🤞",
  "Gostei muito das dicas, agora tenho uma nova perspectiva para melhorar meu relacionamento. ❤️",
  "Fiquei muito feliz por encontrar esse vídeo, estava precisando de ajuda para salvar meu casamento. 🤗",
  "Não aguento mais a falta de amor e carinho no meu relacionamento, preciso mudar isso urgentemente. 🆘",
  "Achei incrível a forma como o vídeo aborda a importância do perdão no relacionamento. Muito obrigada pelas dicas! 🙏",
  "Estou muito animada para colocar em prática as dicas do vídeo e transformar meu relacionamento. 💪",
  "Agradeço muito por compartilhar essas informações, com certeza vão ajudar muitas mulheres a terem um relacionamento mais saudável e feliz. ❤️",
  "Estava desesperada procurando ajuda para salvar meu casamento, e encontrei esse vídeo maravilhoso! 🤗",
  "Não sabia que existia um conteúdo tão completo para ajudar mulheres como eu a melhorar seus relacionamentos. Muito obrigada! 😍",
  "Estou amando o conteúdo do vídeo, está me dando muitas ideias para melhorar meu relacionamento. 👍",
  "Essas dicas são maravilhosas, já estou colocando em prática e vendo resultados no meu casamento. Obrigada! 🙏",
  "Nunca imaginei que pudesse existir um conteúdo tão completo e útil para ajudar a reacender a chama do romance no casamento. Adorei! 😍",
  "Obrigada por compartilhar essas dicas incríveis, estou animada para aplicá-las no meu relacionamento. 💪",
  "Sempre tive dificuldade em me comunicar com meu parceiro, mas depois de assistir a esse vídeo, estou me sentindo mais confiante. Obrigada! 🙏",
  "Não vejo a hora de adquirir o conteúdo completo e aprender ainda mais sobre como ter um relacionamento sólido e feliz. 😊",
  "Achei muito interessante a abordagem do vídeo sobre a importância da autoestima no relacionamento. Parabéns pelo trabalho! 👏",
  "Adorei as dicas do vídeo, tenho certeza de que vão ajudar muitas mulheres a melhorar seus relacionamentos. Obrigada! ❤️",
  "Esse vídeo me fez perceber que ainda tenho muito a aprender sobre como ter um relacionamento saudável e feliz. Vou seguir as dicas! 👍",
  "Obrigada por compartilhar suas experiências e conhecimentos sobre relacionamentos, estou aprendendo muito com o vídeo. 🤗",
  "Não vejo a hora de adquirir o conteúdo completo e começar a transformar meu relacionamento para melhor. 💪",
  "Amei o vídeo, aprendi muito sobre como melhorar minha comunicação com meu parceiro e reacender a chama do romance no casamento. 😍",
  "Acho que esse vídeo pode ser a solução para os problemas que estou enfrentando no meu relacionamento. Como faço para adquirir o conteúdo completo? 🆘",
  "Estou muito satisfeita com as dicas do vídeo, já estou aplicando no meu relacionamento e vendo resultados positivos. Obrigada! 🙏",
  "Achei muito importante a forma como o vídeo aborda a questão da empatia no relacionamento, algo que muitas vezes é negligenciado. 👍",
  "Obrigada por compartilhar essas dicas valiosas, tenho certeza de que vão ajudar muitas mulheres a terem relacionamentos mais felizes e saudáveis. ❤️",
];

const comentariosCompra = [
  "Comprei o conteúdo e estou amando! 😍",
  "Vou comprar agora mesmo, obrigada pela dica! 🤑",
  "Acabei de adquirir o conteúdo, mal posso esperar para começar a por em prática! 💪",
  "Comprar no cartão é super prático, já vou garantir o meu! 💳",
  "Já estava pensando em adquirir algo assim, agora com esses comentários positivos, não vou pensar duas vezes! 😊",
  "Vou pagar no pix, adoro a praticidade! 🤩",
  "Não vejo a hora de começar a por em prática, muito obrigada! 🙏",
  "Feedback super positivo, parabéns pelo trabalho! 👏",
  "Comprando agora mesmo, obrigada pela dica! 💖",
  "Já adquiri e posso garantir que vale a pena! 😎",
  "Só comentando para dar meu feedback positivo sobre o conteúdo! 👍",
  "Já queria comprar algo assim, agora com esses comentários, não tenho mais dúvidas! 😁",
  "Acabei de adquirir e já estou super animada para começar a usar! 🤗",
  "Vou pagar no cartão, super prático! 💳",
  "Ótimo conteúdo, super recomendo! 😘",
  "Obrigada pela dica, já vou adquirir! 🙌",
  "Comprei e já comecei a colocar em prática, muito obrigada! 😍",
  "Já estava procurando algo assim, obrigada por compartilhar! 😉",
  "Já garanti o meu, agora é só começar a usar! 🚀",
  "Comprando agora mesmo, obrigada pela indicação! 😊",
  "Amei esse vídeo, já quero colocar em prática! 😍",
  "Nossa, muito bom mesmo! Obrigada pela dica. 👏",
  "Gostei tanto que já vou compartilhar com minhas amigas. 😊",
  "Super interessante, quero comprar agora! 💰",
  "Muito útil, já vou salvar nos meus favoritos. 📲",
  "Você explica muito bem, obrigada pela ajuda. 🙏",
  "Já tinha ouvido falar desse método, agora quero testar. 🧐",
  "Simplesmente incrível, parabéns pelo conteúdo. 👍",
  "Não sabia que era tão fácil, valeu pela dica. 😃",
  "Quero muito adquirir esse conteúdo, parece ser excelente. 💯",
  "Estou precisando de algo assim, obrigada! 🤗",
  "Ainda bem que encontrei esse vídeo, me ajudou demais. 😌",
  "Você é muito boa nisso, parabéns! 👏👏",
  "Estou impressionada com o conteúdo, muito bom mesmo. 😮",
  "Já vou compartilhar com as minhas amigas, valeu! 👍",
  "Obrigada por compartilhar seus conhecimentos conosco. 🙏",
  "Muito legal, já quero testar na prática. 😃",
  "Gostei tanto que já vou assistir de novo. 😍",
  "Precisava de uma ajuda assim, obrigada! 🤗",
  "Nossa, excelente vídeo! Já vou aplicar essas dicas. 💪",
  "Você é muito talentosa, parabéns pelo conteúdo. 👏",
  "Adorei o vídeo, muito útil. Obrigada! 😊",
  "Já quero comprar e começar a aplicar hoje mesmo! 💰",
  "Amei as dicas, já estou colocando em prática. 😍",
  "Muito obrigada, me ajudou demais! 🙏",
  "Nunca tinha visto nada igual, muito bom. 👌",
  "Já quero mais vídeos desse tipo, por favor! 😃",
  "Esse vídeo é tudo o que eu precisava, obrigada! 🤗",
  "Muito obrigada por compartilhar seus conhecimentos. 🙌",
  "Só tenho a agradecer por esse conteúdo incrível! 🥰",
  "Amei o conteúdo, vou comprar com certeza! 💰",
  "Já estou decidida, vou adquirir o conteúdo agora mesmo! 🙌",
  "Vou pagar no pix, é mais prático! 😉",
  "Vc aceita pagamento no cartão? Estou interessada! 💳",
  "Esse conteúdo tem tudo o que eu preciso, vou comprar hoje! 🤩",
  "Já estou ansiosa para começar a aplicar as dicas do conteúdo! 🚀",
  "Quero muito colocar em prática tudo o que foi ensinado! 😍",
  "Estou impressionada com a qualidade do conteúdo, vou adquirir! 👌",
  "O conteúdo é incrível, já quero começar a usar as estratégias! 💪",
  "Já decidi, vou comprar agora mesmo e aproveitar o desconto! 🛒",
  "Vou comprar o conteúdo agora mesmo, não vou perder essa oportunidade! 💻💰",
  "Já decidi, vou garantir minha vaga e aproveitar o desconto de 85%! 🏃‍♀️🔥",
  "Não posso perder tempo, vou adquirir o conteúdo antes que acabe as vagas! ⏰",
  "Com essa promoção, não dá para resistir! Vou comprar AGORA! 🛒💸",
  "Vi que as vagas estão acabando, então vou correr e garantir a minha! 🏃‍♀️💪",
  "85% de desconto? É agora ou nunca! Vou adquirir o conteúdo imediatamente! 🤑",
  "Não vou perder tempo, vou comprar antes que acabe o desconto! 🕒💯",
  "Oportunidade imperdível! Vou aproveitar o desconto e garantir minha vaga! ✅🔥",
  "Decisão tomada: vou adquirir o conteúdo AGORA mesmo! Não vou me arrepender! 💪💖",
  "As vagas estão esgotando rapidamente, não posso ficar de fora! Vou comprar! 🏃‍♀️💨",
];

const cores = [
  "#394867",
  "#F1F6F9",
  "#654E92",
  "#6C9BCF",
  "#A5C0DD",
  "#F97B22",
  "#FEE8B0",
  "#FF6969",
  "#ECC9EE",
  "#9384D1",
  "#0A4D68",
  "#088395",
  "#3C486B",
  "#F9D949",
  "#F3E99F",
  "#FF6D60",
  "#B9EDDD",
  "#87CBB9",
  "#D14D72",
  "#FFABAB",
  "#FCC8D1",
  "#41644A",
  "#FF6000",
  "#FFA559",
  "#D864A9",
  "#E49393",
  "#EA5455",
  "#97DEFF",
  "#FFACAC",
  "#539165",
  "#4E6E81",
];

// Função para embaralhar comentários
const embaralharComentarios = () => {
  for (let i = comentarios.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [comentarios[i], comentarios[j]] = [comentarios[j], comentarios[i]];
  }
};

// Função para embaralhar comentários
const embaralharComentariosCompra = () => {
  for (let i = comentariosCompra.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [comentariosCompra[i], comentariosCompra[j]] = [comentariosCompra[j], comentariosCompra[i]];
  }
};

// Função para gerar um comentario aleatório baseado no tamanho do array de frases
const gerarComentarioAleatorio = () => {
  const index = Math.floor(Math.random() * comentarios.length);
  embaralharComentarios();
  return comentarios[index];
};

// Função para gerar um comentario aleatório baseado no tamanho do array de frases
const gerarComentarioCompraAleatorio = () => {
  const index = Math.floor(Math.random() * comentariosCompra.length);
  embaralharComentariosCompra();
  return comentariosCompra[index];
};

// A função retorna um nome aleatório do array de nomes
const gerarNomeAleatorio = () => nomes[Math.floor(Math.random() * nomes.length)];

// Esta função tem o objetivo de selecionar uma cor hexadecimal aleatória da array cores.
const gerarCorAleatoria = () => cores[Math.floor(Math.random() * cores.length)];

// Esta função tem como objetivo criar um novo elemento HTML com o conteúdo do comentário, nome e imagem.
const criarComentario = (nome, comentario, cor) => {
  const avatar = document.createElement("div");
  avatar.className = "avatar me-3";
  avatar.style.background = cor;
  avatar.innerHTML = `<span>${nome.charAt(0)}</span>`;

  const divNomeTexto = document.createElement("div");
  divNomeTexto.className = "d-flex flex-column";

  const elNome = document.createElement("h6");
  elNome.className = "mb-0 text-muted";
  elNome.textContent = nome;

  const texto = document.createElement("p");
  texto.className = "small mb-0";
  texto.textContent = comentario;

  divNomeTexto.append(elNome);
  divNomeTexto.append(texto);

  const div = document.createElement("div");
  div.className = "d-flex align-items-center";
  div.appendChild(avatar);
  div.appendChild(divNomeTexto);

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(div);

  return li;
};

// Função para adicionar o comentário no chat
const adicionarComentario = (comentario) => {
  const listaMensagens = document.querySelector(".chat-messages");

  listaMensagens.appendChild(comentario);

  // Scroll automático
  var chatMessages = $(".chat-messages");
  chatMessages.scrollTop(chatMessages[0].scrollHeight);
};

// Função para desativar envio de mensagem manual
const desativarEnvioManual = () => {
  const inputMensagem = document.getElementById("input-mensagem");
  const botaoEnviar = document.getElementById("botao-enviar-mensagem");

  inputMensagem.disabled = true;
  botaoEnviar.style.display = "none";
  inputMensagem.setAttribute("placeholder", "O envio de mensagens está desativado.");
};

// Função para ativar envio de mensagem manual
const ativarEnvioManual = () => {
  const inputMensagem = document.getElementById("input-mensagem");
  const botaoEnviar = document.getElementById("botao-enviar-mensagem");

  inputMensagem.removeAttribute("disabled");
  botaoEnviar.style.display = "inline-block";
  inputMensagem.setAttribute("placeholder", "Envie uma mensagem");
};

// Função para checar se existe a mensagem de comentários desativado
const verificarComentarioDesativado = () => {
  const listaMensagens = document.querySelector(".chat-messages");
  const comentariosDesativados = listaMensagens.querySelector("li.list-group-item.comentarios-desativados.text-center.text-muted.fst-italic");

  if (comentariosDesativados !== null) {
    return true;
  } else {
    return false;
  }
};

// Função para adicionar mensagem de desativação de comentário no chat
const mensagemDesativarComentario = () => {
  if (!verificarComentarioDesativado()) {
    const texto = document.createElement("p");
    texto.textContent = "Comentários desativados para ter total atenção ao vídeo.";

    const li = document.createElement("li");
    li.className = "list-group-item comentarios-desativados text-center text-muted fst-italic";
    li.appendChild(texto);

    listaMensagens.appendChild(li);

    desativarEnvioManual();

    // Scroll automático
    var chatMessages = $(".chat-messages");
    chatMessages.scrollTop(chatMessages[0].scrollHeight);
  }
};

// Função para remover mensagem de desativação de comentário no chat
const removerMensagemDesativarComentario = () => {
  if (verificarComentarioDesativado()) {
    const comentariosDesativados = document.querySelector(".chat-messages .comentarios-desativados");

    if (comentariosDesativados) {
      comentariosDesativados.remove();
      ativarEnvioManual();
    }
  }
};

// Função para calcumar o tempo entre comentários baseado no cálculo inversamente proporcional de mulheres online
// A ideia é que quanto mais mulheres online, mais rápido deve ser o tempo entre os comentários, para que pareça que o chat está mais movimentado
// Usamos uma relação inversamente proporcional, onde o tempo entre comentários diminui conforme o número de mulheres online aumenta.
const calcularTempoComentario = (mulheresOnline) => {
  const MIN_TEMPO = 2000; // Tempo mínimo entre comentários em milissegundos
  const MAX_TEMPO = 10000; // Tempo máximo entre comentários em milissegundos
  const MAX_MULHERES = 100; // Número máximo de mulheres online para cálculo

  // Limita o número de mulheres online para o máximo definido
  mulheresOnline = Math.min(mulheresOnline, MAX_MULHERES);

  // Calcula o tempo baseado no número de mulheres online
  const tempo = MAX_TEMPO - ((MAX_TEMPO - MIN_TEMPO) * mulheresOnline) / MAX_MULHERES;

  return tempo;
};

// Variável definida como chave para gerar ou não comentários
// true = invisível e para a geração
// false = visível e começa a geração
let chatVisivel = true;

// A função cria um comentário aleatório e o adiciona ao chat ao vivo repetidamente em intervalos aleatórios entre 20 e 45 segundos.
function adicionarComentarios() {
  // Verifica se o chat está visível
  if (!chatVisivel) {
    return;
  }

  // Gera nome e cor aleatório
  const nome = gerarNomeAleatorio();
  const cor = gerarCorAleatoria();

  // Define variável de comentário
  var comentario;

  //Vefificar se é para enviar comentários de compra
  if (enviarComentariosCompra && contadorMinutosBloqueio <= aparecerComentariosCompra) {
    removerMensagemDesativarComentario();

    comentario = gerarComentarioCompraAleatorio();

    // Cria o elemento HTML do comentário
    const elementoComentario = criarComentario(nome, comentario, cor);

    // Adiciona o comentário ao chat ao vivo
    adicionarComentario(elementoComentario);
  } else if (contadorMinutosBloqueio <= desativarComentarios) {
    mensagemDesativarComentario();
  } else {
    removerMensagemDesativarComentario();

    comentario = gerarComentarioAleatorio();

    // Cria o elemento HTML do comentário
    const elementoComentario = criarComentario(nome, comentario, cor);

    // Adiciona o comentário ao chat ao vivo
    adicionarComentario(elementoComentario);
  }

  // Definir o tempo inversamente proporcional
  const tempo = calcularTempoComentario(pessoasOnline);

  // Chama novamente a função após o tempo definido
  setTimeout(adicionarComentarios, tempo, pessoasOnline);
}

// Define a pausa e começo da geração automática de comentários de a cordo com a ocultação do chat
const ocultarChatBtn = document.querySelector("#ocultar-chat-btn");

ocultarChatBtn.addEventListener("click", () => {
  if (chatVisivel) {
    chatVisivel = false;
  } else {
    chatVisivel = true;
    adicionarComentarios();
  }
});
