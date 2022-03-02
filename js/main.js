//-------------------------LOCATION AND TIME DISPLAY FOOTER------------------------------------
const button = document.getElementsByClassName("button")[0];
const buttonText = document.getElementById("button-text");
const arrow = document.getElementsByClassName("arrow")[0];
const footer = document.getElementsByClassName("footer")[0];
const randomText = document.getElementsByClassName("random-quote-text")[0];
const timeDisplay = document.getElementsByClassName("time-location-display")[0];

button.addEventListener("click", () => {
    buttonText.textContent.includes('MORE') ? buttonText.textContent = "LESS" : buttonText.textContent = "MORE";
    arrow.classList.toggle("active");
    footer.classList.toggle("active");
    randomText.classList.toggle("active");
    timeDisplay.classList.toggle("active");
    
})

//-------------------------RANDOM QUOTE------------------------------------
const refreshIcon = document.getElementById("refresh-icon");
const quote = document.getElementById("quote");
const author = document.getElementById("author");


refreshIcon.addEventListener("click", () => {
    fetchQuote().catch(error => {
        console.log("Oooops! Something went wrong!! ");
        console.error(error);
    });
})

async function fetchQuote(){
    const response = await fetch('https://programming-quotes-api.herokuapp.com/Quotes/random');
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data.en;
    author.innerHTML = data.author;
}

//-------------------------LOCATION AND TIME------------------------------------

fetchLocation().catch(error => {
    console.log("Oooops! Something went wrong!! ");
    console.error(error);
});

const city = document.getElementById("city");
const country = document.getElementById("country");
const time = document.getElementById("time");
const timeZone = document.getElementById("time-zone");

const currentTimezone = document.getElementsByClassName("current-timezone");
const dayOfTheWeek = document.getElementsByClassName("dayoftheweek");
const dayOfTheYear = document.getElementsByClassName("dayoftheyear");
const weekNumber = document.getElementsByClassName("weeknumber");

let timeZoneJsonData = '';

async function fetchLocation(){
    const response = await fetch('https://api.freegeoip.app/json/?apikey=a999f060-995d-11ec-813b-c55e0fa9a2d1');
    const data = await response.json();
    console.log(data);
    city.innerHTML = data.city;
    country.innerHTML = data.country_name;
    timeZoneJsonData = data.time_zone;
    fetchTime().catch(error => {
        console.log("Oooops! Something went wrong!!");
        console.error(error);
    });
}

async function fetchTime(){
    const url = "http://worldtimeapi.org/api/timezone/" + timeZoneJsonData;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
 
    let date = new Date( data.unixtime*1000);
    time.innerHTML = date.getHours() + ':' + date.getMinutes();
    
    timeZone.innerHTML = data.abbreviation;

    for (let i = 0; i < currentTimezone.length; i++) {
        currentTimezone[i].innerHTML = data.timezone;
    }
    for (let i = 0; i < dayOfTheWeek.length; i++) {
        dayOfTheWeek[i].innerHTML = data.day_of_week;
    }
    for (let i = 0; i < dayOfTheYear.length; i++) {
        dayOfTheYear[i].innerHTML = data.day_of_year;
    }
    for (let i = 0; i < weekNumber.length; i++) {
        weekNumber[i].innerHTML = data.week_number;
    }
}

//-------------------------BACKGROUND IMAGE VARIABLES------------------------------------
// const bgImage = document.getElementsByClassName("bg-image")[0];
// bgImage.style.backgroundImage = "url(/images/bg-night.png)";









