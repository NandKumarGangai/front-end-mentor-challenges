const body = document.body;
const endTime = new Date('December 31 2020 23:59:59');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const interVal = setInterval(updateCountdown, 1000)
setInterval(createSnowFlake, 50);


function updateCountdown() {
    const startTime = new Date();
    const diff = endTime - startTime;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

function createSnowFlake() {
    const snow_flake = document.createElement('i');
    snow_flake.classList.add('fas');
    snow_flake.classList.add('fa-snowflake');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
    snow_flake.style.opacity = Math.random();
    snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, 5000)
}

function showHide() {
    const year = new Date().getFullYear();
    if (year == 2020) {
        document.getElementById('newYear').style.display = 'none';
        document.getElementById('oldYear').style.display = 'flex';
    }

    if (year == 2021) {
        document.getElementById('newYear').style.display = 'flex';
        document.getElementById('oldYear').style.display = 'none';
        clearInterval(interVal);
    }

    document.getElementById('newYear-text').style.background = generate();
}

setInterval(showHide, 1000);


function generate() {

    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
        for (var i = 0; i < 6; i++) {
            var x = Math.round(Math.random() * 14);
            var y = hexValues[x];
            a += y;
        }
        return a;
    }

    var newColor1 = populate('#');
    var newColor2 = populate('#');
    var angle = Math.round(Math.random() * 360);

    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    return gradient;
}
  