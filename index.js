window.addEventListener("keydown", function (e) {
  const code = e.keyCode;
  const audio = document.querySelector(`audio[data-key='${code}']`);
  const activeKey = document.querySelector(`.key[data-key='${code}']`);
  if (activeKey) {
    audio.currentTime = 0;
    audio.play();
    activeKey.classList.add("playing");
  }
});
function removeTransition(e) {
  if (e.propertyName !== "box-shadow") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
