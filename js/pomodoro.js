const timerElement = document.getElementById("timer")
const timerButton = document.getElementById("timerButton")

let minutes = 25
let seconds = 0
let currentCyle = 0
let shortBreaksTaken = 0

let intervalId

//FUNCTION PARA ATUALIZAR O NUMERO NA TELA
function updateTimerDisplay () {
    timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

//FAZ O TIMER FUNCIONAR
function startTimer () {
    intervalId = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(intervalId)

                if (currentCyle % 4 === 3) {
                    //LARGO DESCANSO
                    minutes = 15
                    currentCyle = 0
                } else {
                    minutes = 5
                    shortBreaksTaken++

                    if (shortBreaksTaken === 3) {
                        currentCyle++
                        shortBreaksTaken = 0
                    }
                }
            } else {
                minutes--
                seconds = 59
            }
        } else {
            seconds--
        }

        updateTimerDisplay()
    }, 1000)
}

// VOLTA PRO INICIO
function resetTimer () {
    clearInterval(intervalId)
    minutes = 25
    seconds = 0
    currentCyle = 0
    shortBreaksTaken = 0

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
