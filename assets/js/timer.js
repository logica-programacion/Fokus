const timerButton = document.getElementById('timerButton');
const iconElement = timerButton.querySelector('span');

let isTimerRunning = false;

const pauseImagePath = '/assets/images/pause.svg';
const playArrowImagePath = '/assets/images/play_arrow.svg';

timerButton.addEventListener('click', () => {
    if (isTimerRunning) {
    
        iconElement.innerHTML = `<img src="${playArrowImagePath}" alt="Icono de pausar">`;
        timerButton.textContent = 'Iniciar';
        console.log('Botao Iniciar');

    } else {
    
        iconElement.innerHTML = `<img src="${pauseImagePath}" alt="Icono de pausar">`;
        timerButton.textContent = 'Pausar';
        console.log('Botao Pausar');
    
    }

    isTimerRunning = !isTimerRunning;
})

