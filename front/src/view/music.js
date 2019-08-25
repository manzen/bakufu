const audio = new Audio();
audio.src = "../../resources/ultra_soul.mp3";
function play(scale = 1.0) {
  audio.playbackRate = scale
  audio.play();
}
function stop(){
  audio.pause();
}

