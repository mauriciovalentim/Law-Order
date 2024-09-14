const levels = [
    {
        id: 1,
        icon: "animations/scales/stand0.png",
        drawning: "../animations/scales/stand0.png",
        imgs: imgGet("stand0", 0),
        continueAnim: false,
        animVel: 0.2,
        question: "O que é racismo?",
        options: [
            {
                text: "Preferência por um determinado grupo social",
                isRight: false,
            },
            {
                text: "Crença na superioridade de um grupo racial sobre outro, acompanhada de práticas discriminatórias",
                isRight: true,
            },
            {
                text: "Interesse por diferentes culturas",
                isRight: false,
            },
            {
                text: "Respeito às diferenças individuais",
                isRight: false,
            },
        ],
    },
    {
        id: 2,
        icon: "animations/scales/stand0.png",
        drawning: "../animations/scales/stand0.png",
        imgs: imgGet("stand0", 0),
        continueAnim: false,
        animVel: 0.2,
        question: "Qual a principal causa do racismo?",
        options: [
            {
                text: "Diferenças físicas entre as pessoas",
                isRight: false,
            },
            {
                text: "Construções sociais e históricas que atribuem valores diferentes a grupos raciais",
                isRight: true,
            },
            {
                text: "Convivência entre diferentes culturas",
                isRight: false,
            },
            {
                text: "Competição por recursos",
                isRight: false,
            },
        ],
    },
    {
        id: 3,
        icon: "animations/scales/stand0.png",
        drawning: "../animations/scales/stand0.png",
        imgs: imgGet("stand0", 0),
        continueAnim: false,
        animVel: 0.2,
        question: "Quais são algumas das consequências do racismo?",
        options: [
            {
                text: "Desigualdade social, discriminação e violência",
                isRight: true,
            },
            {
                text: "Desenvolvimento de novas culturas e nações",
                isRight: false,
            },
            {
                text: "Fortalecimento da democracia e cidadania",
                isRight: false,
            },
            {
                text: "Aumento da tolerância e igualdade",
                isRight: false,
            },
        ],
    },
    {
        id: 4,
        icon: "animations/scales/stand0.png",
        drawning: "../animations/scales/stand0.png",
        imgs: imgGet("stand0", 0),
        continueAnim: false,
        animVel: 0.2,
        question: "O que podemos fazer para combater o racismo?",
        options: [
            {
                text: "Ignorar as situações de racismo",
                isRight: false,
            },
            {
                text: "Promover o diálogo, a educação e a igualdade",
                isRight: true,
            },
            {
                text: "Reforçar os estereótipos",
                isRight: false,
            },
            {
                text: "Isolar as pessoas que praticam o racismo",
                isRight: false,
            },
        ],
    },
    {
        id: 5,
        icon: "animations/scales/stand0.png",
        drawning: "../animations/scales/stand0.png",
        imgs: imgGet("stand0", 0),
        continueAnim: false,
        animVel: 0.2,
        question: "Por que é importante falar sobre racismo?",
        options: [
            {
                text: "Para culpar determinadas pessoas",
                isRight: false,
            },
            {
                text: "Para criar divisão entre as pessoas",
                isRight: false,
            },
            {
                text: "Para promover a conscientização e a mudança social",
                isRight: true,
            },
            {
                text: "Para generalizar comportamentos",
                isRight: false,
            },
        ],
    },
];

function imgGet(file, qnt) {
    const arrayImgs = [];
    for (let i = 0; i <= qnt - 1; i++) {
        let newImg;
        newImg = `../animations/${file}/sprite_${i}.png`;
        arrayImgs.push(newImg);
    }
    return arrayImgs;
}

export function getLevels(level = 0) {
    if (level == 0) {
        return levels;
    } else {
        for (let i = 0; i <= levels.length; i++) {
            if (levels[i].id == level) {
                return levels[i];
            }
        }
    }
}
