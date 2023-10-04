const html = document.querySelector('html')
const focobt = document.querySelector('.app__card-button--foco')
const curtobt = document.querySelector('.app__card-button--curto')
const longobt = document.querySelector('.app__card-button--longo')
const imageFoco = document.querySelector('.app__image')
const texto = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoinput = document.querySelector('#alternar-musica')
const startbt = document.querySelector('#start-pause')
const Iniciar_Pausebt = document.querySelector('#start-pause span')
const imagePause = document.querySelector('.app__card-primary-butto-icon')
const timer = document.querySelector('#timer')
const musica = new Audio ('/sons/luna-rise-part-one.mp3')
const playmusic = new Audio ('/sons/play.wav')
const pausemusic = new Audio ('/sons/pause.mp3')
const beepmusic = new Audio ('/sons/beep.mp3')
musica.loop = true

let tempoSegundos = 1500
let intervaloId = null

musicaFocoinput.addEventListener('change', () => {
    if (musica.paused){
        musica.play()
    }
    else{
        musica.pause()
    }
})

focobt.addEventListener('click', () => {
    tempoSegundos = 1500
    alterarContexto('foco')
    focobt.classList.add('active')
})
curtobt.addEventListener('click', () => {
    tempoSegundos = 300
    alterarContexto('descanso-curto')
    curtobt.classList.add('active')
})
longobt.addEventListener('click', () => {
    tempoSegundos = 900
    alterarContexto('descanso-longo')
    longobt.classList.add('active')
})

function alterarContexto (contexto){

    mostrarTempo()
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

const contRegress = () => {
    if (tempoSegundos <= 0){
        beepmusic.play()
        alert('Tempo finalizado')
        zerar()
        return
    }
    tempoSegundos -= 1
    mostrarTempo()
}

startbt.addEventListener('click', iniciar)

function iniciar() {
    if(intervaloId){
        pausemusic.play()
        zerar()
        return
    }
    playmusic.play()
    intervaloId = setInterval(contRegress, 1000)
    Iniciar_Pausebt.textContent = "Pausar"
    imagePause.setAttribute('src', `/imagens/pause.png`)
}

function zerar(){
    Iniciar_Pausebt.textContent = "Começar"
    imagePause.setAttribute('src', `/imagens/play_arrow.png`)
    clearInterval(intervaloId)
    intervaloId = null
}

function mostrarTempo(){
    const tempo = new Date(tempoSegundos * 1000)
    const tempoFormatado = tempo.toLocaleString('pt-br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `${tempoFormatado}`
}

mostrarTempo()