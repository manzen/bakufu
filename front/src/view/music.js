const audio = new Audio();
let isPlay = true;
audio.src = "../../resources/sigeru.mp3";
function togglePlay() {
  if (isPlay) {
    audio.play();
  } else {
    audio.pause();
  }
  isPlay = !isPlay;
}
function stop(){
  audio.pause();
  audio.currentTime = 0;
}

