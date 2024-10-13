
function timeNow() {
    let countDownDate = new Date("decmber 5, 2024 15:37:25").getTime();

    let dayEl = document.querySelector(".day");
    let hourEl = document.querySelector(".hour");
    let minuteEl = document.querySelector(".minute");
    let secondEl = document.querySelector(".second");
    
    let now = new Date().getTime();
    let distance = countDownDate - now;
    
    
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        dayEl.innerHTML=days;
        hourEl.innerHTML=hours;
        minuteEl.innerHTML=minutes;
        secondEl.innerHTML=seconds;
}

setInterval( function () {
    timeNow();
},1000)
