const button = document.getElementsByClassName("button")[0];
const buttonText = document.getElementById("button-text");
const arrow = document.getElementsByClassName("arrow")[0];


const footer = document.getElementsByClassName("footer")[0];
const randomText = document.getElementsByClassName("random-quote-text")[0];
const timeDisplay = document.getElementsByClassName("time-location-display")[0];


// const bgImage = document.getElementsByClassName("bg-image")[0];
// bgImage.style.backgroundImage = "url(/images/bg-night.png)";

button.addEventListener("click", ()=>{
    buttonText.textContent.includes('MORE') ? buttonText.textContent = "LESS" : buttonText.textContent = "MORE";
    arrow.classList.toggle("active");
    footer.classList.toggle("active");
    randomText.classList.toggle("active");
    timeDisplay.classList.toggle("active");
    
})




