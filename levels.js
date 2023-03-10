const levels = [
    {
        id: 1,
        icon: 'animations/fire_animation/stand0.png',
        drawning: '../animations/fire_animation/stand0.png', 
        imgs: imgGet('fire_animation', 4),
        continueAnim: true,
        animVel: 0.10,
        question: 'Pedro foi recentemente contratado como estagiário e deve operar em um painel elétrico onde existem alguns componentes que necessitam de manutenção. No aparelho existem regiões do painel que estão expostas e em contato direto com o ar ainda há um problema com um dos cabos de alimentação que não está ligado diretamente ao terra do aparelho. O equipamento nunca teve manutenção preventiva, e sua última preditiva fora a 4 meses atrás; escolha a opção correta abaixo:',
        options: [{
            text: "Operar mesmo assim; uma tensão eficaz de 220 V não apresenta risco",
            isRight: false
        }, 
        {
            text: "Segundo a NR12, existem painéis que não são necessários o aterramento; logo, pode sim operar",
            isRight: false
        }, 
        {
            text: "Basta não entrar em contato com as regiões vivas e pode-se sim operar",
            isRight: false
        }, 
        {
            text: "Enviar o painel para outro setor e informar aos responsáveis, máquina está fora de cogitação operação",
            isRight: true
        }],
    },
    {
        id: 2,
        icon: 'animations/smash_animation/stand0.png',
        drawning: '../animations/smash_animation/stand0.png',
        imgs: imgGet('smash_animation', 8),
        continueAnim: false,
        animVel: 0.20,
        question: 'Durante a construção de um galpão, Jonathan estava realizando uma de suas atividades diárias de guindaste quando percebe que está logo abaixo de um guindaste que transita livremente com os pesos suspensos pelo gancho. O que ele deve fazer?',
        options: [
            {text: 'Segundo a NR-12, o incorreto é o operador de guindaste por estar operando em uma área inapropriada para transporte de cargas', isRight: false},
            {text: 'Desde que o gancho e a corrente estejam devidamente dimensionados (como a norma exige que estejam) não há problemas de permanecer embaixo', isRight: false},
            {text: 'Não é necessário sair, pois o peso suspenso não é o suficiente para tracionar a corrente o suficiente para quebrá-la', isRight: false},
            {text: 'Ele deve afastar-se do alcance do guindaste, uma vez que é estritamente proibido permanecer abaixo do peso suspenso', isRight: true}
        ]
    }, 1, 1, 1, 1, 1, 1, 1, 1, 1

]

function imgGet(file, qnt){
    const arrayImgs = []
    for (let i = 0; i <= qnt-1; i++){
        let newImg
        newImg = `../animations/${file}/sprite_${i}.png`
        arrayImgs.push(newImg)
    }
    return arrayImgs
}

export function getLevels(level = 0){
    if (level == 0){
        return levels
    }
    else {
        for (let i = 0; i <= levels.length; i++){
            if (levels[i].id == level){
                return levels[i]
            }
        }
    }
}