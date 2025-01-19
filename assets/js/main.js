const ratio = 0.5625;

function setElementScale(target) {
    let element = document.querySelector(target);
    setScale(element);
}
function setScale(target) {
    if (window.innerWidth / window.innerHeight < ratio) {
        let zoom = window.innerWidth / 510
        target.style.zoom = zoom
    }
    // console.log(window.innerWidth, target.clientWidth, window.innerWidth / 1920)
}

function setDesktop(target) {
    if (window.innerWidth / window.innerHeight < ratio) {
        target.style.width = `${window.innerWidth}px`;
        target.style.height = `${window.innerWidth / ratio}px`
    }
}
function reScale() {
    // setElementScale("#desktop");
    setDesktop(document.querySelector("#desktop-app"))
    setElementScale("#content-desktop");
}
reScale();
document.addEventListener("DOMContentLoaded", reScale);
document.addEventListener("resize", reScale);
document.addEventListener("load", reScale);
window.addEventListener("resize", reScale);
window.addEventListener("load", reScale);

function OpenMessage(title, content, button) {
    document.querySelector(".title-message").innerText = title;
    document.querySelector(".content-message").innerText = content;
    document.querySelector(".button-layout").innerText = button;
    document.querySelector("#message-box").classList.remove("none")

}

function CloseMessage() {
    document.querySelector("#message-box").classList.add("none")
}

