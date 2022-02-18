const button = document.getElementsByClassName("button")[0];
const buttonText = document.getElementById("button-text");
const arrow = document.getElementsByClassName("arrow")[0];

// const bgImage = document.getElementsByClassName("bg-image")[0];
// bgImage.style.backgroundImage = "url(/images/bg-night.png)";

button.addEventListener("click", ()=>{
    buttonText.textContent.includes('MORE') ? buttonText.textContent = "LESS" : buttonText.textContent = "MORE";
    arrow.classList.toggle("active") 
})




