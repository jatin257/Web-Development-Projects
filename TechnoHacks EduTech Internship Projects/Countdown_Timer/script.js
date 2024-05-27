let ms = 0, s = 0, min = 0, h = 0;
let timer;

 let display = document.querySelector('.timer-display');
let laps = document.querySelector('.laps');

// start button 
function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

function run() {
    display.innerHTML = getTimer();
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }

    if (s == 60) {
        s = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        h++;
    }
}

function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + (min < 10 ? "0" + min : min)
     + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}

// pause button
function pause() {
    stopTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

// reset button
function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    min = 0;
    h = 0;
    display.innerHTML = getTimer();
}

// restart button
function restart() {
    if (timer) {
        reset(); 
        start();
    }
}

// lap button
function lap() {
    if(timer) {
        let li = document.createElement("li");
        li.innerHTML = getTimer();
        laps.appendChild(li);
    }
}

// reset_lap button
function reset_lap() {
   laps.innerHTML = "";
}