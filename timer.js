let time = 25 * 60; 
let timerInterval = null;
const timerDisplay = document.getElementById("timer");

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (timerInterval) return; 
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      alert("Time's up! Take a break.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 25 * 60;
  updateDisplay();
}

updateDisplay(); 
