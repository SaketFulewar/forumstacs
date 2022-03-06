const body = document.querySelector("body");
const popupContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".btn-close");

function popUp(){
    body.style.overflowY = "hidden";
    popupContainer.style.display = "flex";
    setTimeout(() => {
        popupContainer.style.opacity = "1";
        popup.style.transform = "scale(1)";
    }, 500);
}

    btnClose.addEventListener("click",()=>{
        popupContainer.style.opacity = "0";
        popUp.style.display = "none";
        setTimeout(() => {
            popupContainer.style.display = "none";
        }, 500);
    })

setTimeout(() => {
    popUp();
}, 500);