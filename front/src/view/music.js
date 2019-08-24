const audio = new Audio();
audio.src = "../../resources/runner.mp3";
function play() {
  audio.play();
}
function stop(){
  audio.pause();
}

