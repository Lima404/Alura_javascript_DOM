const html = document.querySelector('html')
const focobt = document.querySelector('.app__card-button--foco')
const curtobt = document.querySelector('.app__card-button--curto')
const longobt = document.querySelector('.app__card-button--longo')
const imageFoco = document.querySelector('.app__image')
const texto = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
  
focobt.addEventListener('click', () => {
    alterarContexto('foco')
    focobt.classList.add('active')
})
curtobt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtobt.classList.add('active')
})
longobt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longobt.classList.add('active')
})

function alterarContexto (contexto){

    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    })
    
    // CORES

    html.setAttribute('data-contexto', contexto)

    // IMAGENS

    imageFoco.setAttribute('src', `/imagens/${contexto}.png`)

    // TEXTO

    switch (contexto) {
        case "foco":
            texto.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            texto.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong"> Faça uma pausa curta!</strong>`
            break;

        case "descanso-longo":
            texto.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        break;
    
        default:
            break;
    }
}


