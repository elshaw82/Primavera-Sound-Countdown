
const months = [
    "January",
    "February",
    "March",
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
]

const weekdays = [
    "Sunday",
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday", 
]

const countdownBox = document.querySelector('.countdown');
const dateItems = document.querySelectorAll('.box h2');


let futureDate = new Date(2021,5,2,13,30,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];

// future date in milliseconds
const futureTime = futureDate.getTime();

function timeRemaining() {
    const today = new Date().getTime();
    const t = futureTime - today;   
   
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hrs

    // values in milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60  * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculating the values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // values array
    const values = [days, hours, minutes, seconds];

    function addZero(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    } 

    dateItems.forEach(function(item, index){
        item.innerHTML = addZero(values[index]);
    });
    if(t < 0) {
        clearInterval(countdown);
        // add class to container below to celebrate or extra text
    }
}

//countdown
let countdown = setInterval(timeRemaining, 1000);

timeRemaining();



