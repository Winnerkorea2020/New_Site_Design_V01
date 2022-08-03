const chattingMessage = document.querySelector(".chatting-message");
const chattingAlam = document.querySelector(".chatting-alam");
const chattingClose = document.querySelector(".chatting-close");
const bodyOverFlowHidden = document.querySelector(".largeBody");

function chattingShow() {
  bodyOverFlowHidden.classList.add("overflow-hidden");
  chattingMessage.classList.add("block");
  chattingMessage.classList.remove("hidden");
}

function chattingHidden() {
  bodyOverFlowHidden.classList.remove("overflow-hidden");
  chattingMessage.classList.remove("block");
  chattingMessage.classList.add("hidden");
}

if (chattingAlam) {
  chattingAlam.addEventListener("click", chattingShow);
}

if (chattingClose) {
  chattingClose.addEventListener("click", chattingHidden);
}
