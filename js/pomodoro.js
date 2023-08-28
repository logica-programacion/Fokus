const timerElement = document.getElementById("timer");
const timerButton = document.getElementById("timerButton");
const progresses = document.querySelectorAll(".progress");
const pomodoroSeconds = 1500;
const shortBreakSeconds = 300;
const longBreakSeconds = 900;
let timer = pomodoroSeconds;
let intervalId;

timerButton.addEventListener("click", () => {
    if (intervalId) {
        pause();
    } else {
        startTimer();        
    }
})

progresses.forEach(element => {
  element.addEventListener('click', function() {
    selectProgress(this); 
  });
});

function selectProgress(element) {    
    let selectClass = "progress--focus";
    let selectedProgress = document.querySelector(`.${selectClass}`);    
    selectedProgress.classList.remove(selectClass);
    element.classList.add(selectClass);
    resetTimerByElement(element);    
}

function updateTimerDisplay() {
    let minutes = Math.floor(timer/60);
    let seconds = timer % 60;    
    timerElement.innerHTML = `${pad(minutes)}:${pad(seconds)}`;       
}

function pad(num) {
    return num < 10 ? '0' + num : '' + num;
}

function startTimer() {    
    timerButton.textContent = "Pausar";
    intervalId = setInterval(() => {        
        if (timer === 0) {  
            let current = document.querySelector(".progress--focus");
            resetTimerByElement(current);          
            return;
        }
        timer--;
        updateTimerDisplay();
    }, 1000);
}

function pause() {
    clearInterval(intervalId);
    timerButton.textContent = "Iniciar";
    intervalId = null; 
}

function resetTimerBySeconds(seconds) {    
    pause();
    timer = seconds;
    updateTimerDisplay();
}

function resetTimerByElement(element) {
    if (element.id === "focus") {
        resetTimerBySeconds(pomodoroSeconds);        
    } else if (element.id === "short-break") {
        resetTimerBySeconds(shortBreakSeconds); 
    } else {
        resetTimerBySeconds(longBreakSeconds);       
    }
}

updateTimerDisplay()
