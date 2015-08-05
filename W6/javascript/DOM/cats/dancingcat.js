var movePixels = 8;
var movePixelsTop = 1;
var delayMs = 80;
var catTimer = null;
var catWalkImage = document.getElementsByTagName('img')[0];
var catDanceImage = document.getElementsByTagName('img')[1];


function catWalk() {
    var img = catWalkImage;

    var currentLeft = parseInt(img.style.left);
    img.style.left = (currentLeft + movePixels) + 'px';

    var currentTop = parseInt(img.style.top);
    img.style.top = (currentTop + movePixelsTop) + 'px';

    if (currentLeft > window.innerWidth - img.width) {
        movePixels = -8;
        img.id = 'mirror-cat';
    }
    if (currentLeft < 0) {
        movePixels = 8;
        img.id = null;
    }
    if (currentTop > window.innerHeight - img.height) {
        movePixelsTop = -8;
    }
    if (currentTop < 0) {
        movePixelsTop = 8;
    }
    if ((currentLeft > (window.innerWidth / 2 - (img.width / 2))) && (currentLeft < (window.innerWidth / 2 - (img.width / 2) + 15))) {
        dancingCat();
    }
}

function startCatWalk() {
    catTimer = window.setInterval(catWalk, delayMs);
}

function onStartClick() {
    startCatWalk();
}
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', onStartClick);

function onStopClick() {
    window.clearInterval(catTimer);
}
var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', onStopClick);

function onSpeedClick() {
    movePixels += 5;
    var speed = movePixels * (1000 / 50);
    document.getElementById('info').innerHTML = 'Current speed: ' + speed + ' px/second';
};

function dancingCat() {
    movePixels = 0;
    movePixelsTop = 0;
    if (img = catWalkImage) {}
    catWalkImage.src = catDanceImage.src;
    window.clearInterval(dancingCat, 2000);
}

function stopDancingCat() {
    catWalk();
};
// debugger;

var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', onSpeedClick);