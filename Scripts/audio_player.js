var audio = new Audio();
function play(){
  //получаем input field
  var audioInput = document.getElementById('audio');
  //получаем значение с формы
  var url = audioInput.value;
  //создаем аудио объект if needed
  if (audio.src !== url) {
    stop();
    audio.src = url;
  }
  audio.play();
}
function pause() {
  audio.pause();
}
function stop(){
  audio.pause();
  audio.currentTime = 0.0;
  audio.src = '';
}
function stopAndAlert() {
  stop();
  alert('Остановлено!');
}