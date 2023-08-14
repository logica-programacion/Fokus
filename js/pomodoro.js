const timerElement = document.getElementById("timer");
const timerButton = document.getElementById("timerButton");

// const pomodoroSeconds = 1500;
const pomodoroSeconds = 3;
const shortBreakSeconds = 300;
const longBreakSeconds = 900;

let timer = pomodoroSeconds;
let isPomodoro = true;
let shortBreaksTaken = 0;
let isLongBreak = false;
let intervalId;

//FUNCTION PARA ATUALIZAR O NUMERO NA TELA
function updateTimerDisplay() {
    let minutes = Math.floor(timer/60);
    let seconds = timer % 60;    
    
    timerElement.innerHTML = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : '' + num;
}

//FAZ O TIMER FUNCIONAR
function startTimer() {
    intervalId = setInterval(() => {
        if (timer === 0) {
            togglePomodoro(); 
            return;
        }

        timer--;
        updateTimerDisplay();
    }, 1000)
}

function togglePomodoro() {
    if (isPomodoro) {
        isPomodoro = false;
        console.log('pomodoro');

        if (shortBreaksTaken === 3) {
            timer = longBreakSeconds;
            shortBreaksTaken = 0;
            isLongBreak = true;
            console.log("pausa longa");
        }
        else
            timer = shortBreakSeconds;
    }
    else {
        isPomodoro = true;
        timer = pomodoroSeconds;
        if (!isLongBreak) {
            shortBreaksTaken++;
            console.log("1 pausa");
        }            
        else 
            isLongBreak = false;        
    }

    resetTimer();
}


// VOLTA PRO INICIO
function resetTimer () {
    clearInterval(intervalId)
    timerButton.textContent = "Iniciar"
    intervalId = null
    updateTimerDisplay()
}

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
