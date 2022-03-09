const body = document.querySelector("body");
const popupContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".btn-close");

// function popUp(){
//     popupContainer.style.display = "flex";
//     setTimeout(() => {
//         popupContainer.style.opacity = "1";
//         popup.style.transform = "scale(1)";
//     }, 500);
// }

    btnClose.addEventListener("click",()=>{
        // popupContainer.style.opacity = "0";
        popupContainer.style.display = "none";
        popUp.style.display = "none";
    })

setTimeout(() => {
    popUp();
}, 500);