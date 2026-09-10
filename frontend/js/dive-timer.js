const timer = document.getElementById('timer');

const startDive = document.getElementById('start-dive');
const pauseDive = document.getElementById('pause-dive');

const pauseActions = document.getElementById('pause-actions');

const resetDive = document.getElementById('reset-dive');
const resumeDive = document.getElementById('resume-dive');
const finishDive = document.getElementById('finish-dive');

let startedAt = 0;
let elapsedTime = 0;
let interval = null;

function updateTimer() {
    let currentTime = elapsedTime;

    if (startedAt !== 0) {
        currentTime += Date.now() - startedAt;
    }

    const totalSeconds = Math.floor(currentTime / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    timer.textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    startedAt = Date.now();

    interval = setInterval(updateTimer, 250);

    startDive.hidden = true;
    pauseDive.hidden = false;
    pauseActions.hidden = true;
}

function pauseTimer() {
    elapsedTime += Date.now() - startedAt;
    startedAt = 0;

    clearInterval(interval);
    interval = null;

    updateTimer();

    pauseDive.hidden = true;
    pauseActions.hidden = false;
}

function resumeTimer() {
    startedAt = Date.now();

    interval = setInterval(updateTimer, 250);

    pauseActions.hidden = true;
    pauseDive.hidden = false;
}

function resetTimer() {
    clearInterval(interval);

    interval = null;
    startedAt = 0;
    elapsedTime = 0;

    timer.textContent = '00:00';

    pauseActions.hidden = true;
    pauseDive.hidden = true;
    startDive.hidden = false;
}

function finishTimer() {
    clearInterval(interval);

    interval = null;
    startedAt = 0;

    pauseActions.hidden = true;

    const data = getDiveCleanData();
    data.pendingDive = { duration: timer.textContent, date: new Date().toISOString() };
    saveDiveCleanData(data);

    window.location.href = './result.html';
}

startDive.addEventListener('click', startTimer);
pauseDive.addEventListener('click', pauseTimer);
resumeDive.addEventListener('click', resumeTimer);
resetDive.addEventListener('click', resetTimer);
finishDive.addEventListener('click', finishTimer);
