const levels = [
    {
        question: "O que é racismo?",
        options: [
            {
                text: "Preferência por um determinado grupo social",
            },
            {
                text: "Crença na superioridade de um grupo racial sobre outro, acompanhada de práticas discriminatórias",
            },
            {
                text: "Interesse por diferentes culturas",
            },
            {
                text: "Respeito às diferenças individuais",
            },
        ],
        rightOption: 2,
    },
    // {
    //     question: "Qual a principal causa do racismo?",
    //     options: [
    //         {
    //             text: "Diferenças físicas entre as pessoas",
    //         },
    //         {
    //             text: "Construções sociais e históricas que atribuem valores diferentes a grupos raciais",
    //         },
    //         {
    //             text: "Convivência entre diferentes culturas",
    //         },
    //         {
    //             text: "Competição por recursos",
    //         },
    //     ],
    //     rightOption: 2,
    // },
    // {
    //     question: "Quais são algumas das consequências do racismo?",
    //     options: [
    //         {
    //             text: "Desigualdade social, discriminação e violência",
    //         },
    //         {
    //             text: "Desenvolvimento de novas culturas e nações",
    //         },
    //         {
    //             text: "Fortalecimento da democracia e cidadania",
    //         },
    //         {
    //             text: "Aumento da tolerância e igualdade",
    //         },
    //     ],
    //     rightOption: 1,
    // },
    // {
    //     question: "O que podemos fazer para combater o racismo?",
    //     options: [
    //         {
    //             text: "Ignorar as situações de racismo",
    //         },
    //         {
    //             text: "Promover o diálogo, a educação e a igualdade",
    //         },
    //         {
    //             text: "Reforçar os estereótipos",
    //         },
    //         {
    //             text: "Isolar as pessoas que praticam o racismo",
    //         },
    //     ],
    //     rightOption: 2,
    // },
    // {
    //     question: "Por que é importante falar sobre racismo?",
    //     options: [
    //         {
    //             text: "Para culpar determinadas pessoas",
    //         },
    //         {
    //             text: "Para criar divisão entre as pessoas",
    //         },
    //         {
    //             text: "Para promover a conscientização e a mudança social",
    //         },
    //         {
    //             text: "Para generalizar comportamentos",
    //         },
    //     ],
    //     rightOption: 3,
    // },
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
