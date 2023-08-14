// SELECIONANDO ELEMENTOS
const timerElement = document.getElementById("timer");
const timerButton = document.getElementById("timerButton");

// ALTERAR COR DE FUNDO
function changeBackgroundColor(elementSelector, color) {
    const elementTimer = document.querySelector(elementSelector);

    if (elementTimer) {
        elementTimer.style.backgroundColor = color;
        elementTimer.style.borderColor = color;  
    }
}

// LIMPA TODAS AS CORES -> GARANTE QUE UMA COR ESTEJA ATIVADA 
function clearAllProgressStyles() {
    changeBackgroundColor('.progress--focus', 'transparent');
    changeBackgroundColor('.progress-big', 'transparent');
    changeBackgroundColor('.progress--short', 'transparent');
}


// TEMPO DO POMODORO
// const pomodoroSeconds = 1500;
const pomodoroSeconds = 3;
// TEMPO DO DESCANSO CURTO
const shortBreakSeconds = 2;
// TEMPO DO DESCANSO LONGO
const longBreakSeconds = 1;


// ARMAZENO O TEMPO RESTANTE EM SEGUNDOS
let timer = pomodoroSeconds;
// INDICA SE O TEMPORIZADOR ESTA EM UM PERIODO DE POMODORO OU N 
let isPomodoro = true;
// CONTADOR DE PAUSAR CURTAS -> DETERMINA QUANDO FAZER UMA PAUSA LONGA
let shortBreaksTaken = 0;
// INDICA SE O TEMPORIZADOR ENSTA EM UM PERIODO DE PAUSA LONGA
let isLongBreak = false;

// ARMAZENA O ID RETORNADO PELO "setInterval" PARA PERMITIR O CANCELAMENTO POSTERIOR DO INTERVALO
let intervalId;


//FUNCTION PARA ATUALIZAR O NUMERO NA TELA
function updateTimerDisplay() {
    let minutes = Math.floor(timer/60);
    let seconds = timer % 60;    

    timerElement.innerHTML = `${pad(minutes)}:${pad(seconds)}`;

    // Adicionar as chamadas de callback para mudar as cores dos elementos de progresso aqui
    if (isPomodoro) {
        changeBackgroundColor('.progress--focus', '#9757FF4D'); // Mudança de cor de foco durante Pomodoro
    } else if (isLongBreak) {
        changeBackgroundColor('.progress-big', '#1875E9'); // Mudança de cor durante pausa longa
    } else {
        changeBackgroundColor('.progress--short', '#02CDA133'); // Mudança de cor durante pausa curta
    }

}

// ADICIONA UM ZERO A ESQUERDA DE NUMEROS MENORES QUE 10 -> MANTEM FORMATACAO
function pad(num) {
    return num < 10 ? '0' + num : '' + num;
}

function startTimer() {
    
    //USA O "setInterval" PARA DIMINUIR O TEMPO RESTANTE A CADA SEGUNDO
    intervalId = setInterval(() => {
        //O TEMPO = 0 CHAMA A FUNCTION "togglePomodoro" PARA ALTERNAR ENTRE PERIODOS DE TRABALHO E PAUSA
        if (timer === 0) {
            togglePomodoro(); 

            return;
        }

        timer--;
        updateTimerDisplay();
    }, 1000)

}

//ALTERNA ENTRE OS PERIODOS DE TRABALHO/POMODORO E PAUSA
function togglePomodoro() {
    // SE ESTIVER NO MODO POMODORO -> DECIDE SE DEVE FAZER UMA PAUSA CURTA OU LONGA -> COM BASE NO "shortBreaksTaken"
    if (isPomodoro) {
        clearAllProgressStyles();
        changeBackgroundColor('.progress--focus', '#9757FF4D')

        isPomodoro = false;
        console.log(`Pomodoro: ${isPomodoro}`);

        if (shortBreaksTaken === 3) {
            timer = longBreakSeconds;
            shortBreaksTaken = 0;
            isLongBreak = true;
            console.log("pausa longa");
            
            clearAllProgressStyles();
            changeBackgroundColor('.progress-big', '#1875E9');
        } else {
            
            timer = shortBreakSeconds;
            console.log(`Pausa curta -> quantas: ${shortBreaksTaken}`);

            clearAllProgressStyles();
            changeBackgroundColor('.progress--short', '#02CDA133');
        }
        
    } else {
        isPomodoro = true;
        timer = pomodoroSeconds;

        if (!isLongBreak) {
            shortBreaksTaken++;
            console.log(`Quantidade de pausas curtas: ${shortBreaksTaken}`);

            clearAllProgressStyles();
            changeBackgroundColor('.progress--focus', '#9757FF4D');
        } else {
            isLongBreak = false;

            clearAllProgressStyles();
            changeBackgroundColor('.progress--focus', '#9757FF4D');
        } 
    }
    resetTimer();
}


// LIMPA O INTERVALO E REDEFINA A INTERFACE DO TEMPORIZADOR
function resetTimer () {
    clearInterval(intervalId)
    timerButton.textContent = "Iniciar"
    intervalId = null
    updateTimerDisplay()
}

// O BOTAO ALTERNA ENTRE INCIAR E PAUSAR
timerButton.addEventListener("click", () => {
    if (intervalId) {
        clearInterval(intervalId)
        timerButton.textContent = "Iniciar"
        intervalId = null
    } else {
        startTimer()
        timerButton.textContent = "Pausar"
    }
})

//INICIALIZAR
updateTimerDisplay()

// changeBackgroundColor('.progress--focus', '#9757FF4D');
// changeBackgroundColor('.progress-big', '#1875E9');
// changeBackgroundColor('.progress--short', '#02CDA133');
