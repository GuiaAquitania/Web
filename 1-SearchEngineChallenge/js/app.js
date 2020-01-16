

document.querySelector(".btn-darkMode").addEventListener("click", darkMode);
document.querySelector(".btn-default").addEventListener("click", defaultMode);

function darkMode() {
document.body.style.backgroundColor = "#373737";
}

function defaultMode() {
  document.body.style.backgroundColor = "rgb(244, 248, 247)";
}

