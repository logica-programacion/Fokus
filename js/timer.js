let intervalId;
let remainingTime = 1500; // 25 MINUTOS EM SEGUNDOS (25 * 60)
let timerActive = false

const timeElement = document.getElementById("time");
const timerButton = document.getElementById('timerButton');

function formatTime (time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    //String = CONVERTE OS MIN E SEC EM STRING
    //padStart = FORMATAR OS VALORES COM DOIS DIGITOS
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateTimeDisplay() {
    timeElement.textContent = formatTime(remainingTime);
}

function toggleTimer() {
    if (!timerActive) {
        startTimer();
    } else {
        stopTimer();
    }
}

function startTimer() {
    intervalId = setInterval(() => {
        remainingTime -= 1;
        updateTimeDisplay();

        if (remainingTime <= 0) {
            stopTimer();
        }
    }, 1000);

    timerActive = true;
    timerButton.textContent = "Parar";
}

function stopTimer() {
    clearInterval(intervalId);
    timerActive = false;
    timerButton.textContent = "Continuar";
}

function resetTimer() {
    clearInterval(intervalId);
    remainingTime = 1500;
    updateTimeDisplay();
    timerActive = false;
    timerButton.textContent = "Iniciar";
}

timerButton.addEventListener("click", () => {
    if (remainingTime > 0 || timerActive) {
        toggleTimer();
    } else {
        resetTimer();
    }
});

updateTimeDisplay();
