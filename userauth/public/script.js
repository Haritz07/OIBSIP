const backgroundMusic = document.getElementById("backgroundMusic");
const selectSound = document.getElementById("selectSound");
const easyOption = document.getElementById("easy");
const difficultOption = document.getElementById("difficult");
const mediumOption = document.getElementById("medium");

function playSound(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}
playSound(backgroundMusic);

function playSound(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
}

easyOption.addEventListener("click", function (audioElement) {
    playSound(selectSound);
});

difficultOption.addEventListener("click", function (audioElement) {
    playSound(selectSound);
});

mediumOption.addEventListener("click", function (audioElement) {
    playSound(selectSound);
});