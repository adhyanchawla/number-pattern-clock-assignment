//current time

var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

// ISTTime now represents the time in IST coordinates

var hoursIST = ISTTime.getHours()
var minutesIST = ISTTime.getMinutes()
var secondsIST = ISTTime.getSeconds();



setInterval(()=>{

    let hours = document.querySelector(".hours");
    let mins = document.querySelector(".mins");
    let secs = document.querySelector(".secs");
    var h = 0, m = 0, s = 0;
    if(hoursIST < 10) {
        h = `<div class="text1">0${hoursIST} :</div>`;
    } else {
        h = `<div class="text1">${hoursIST} :</div>`;
    }

    if(minutesIST < 10) {
        m = `<div class="text2"> 0${minutesIST} :</div>`;
    } else {
        m = `<div class="text2"> ${minutesIST} :</div>`;
    }

    if(secondsIST < 10) {
        s = `<div class="text3"> 0${secondsIST}</div>`;
    } else {
        s = `<div class="text3"> ${secondsIST}</div>`;
    }
    

    hours.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;

    // console.log(hoursIST + ":" + minutesIST + ":" + secondsIST);

    if(minutesIST == 59 && secondsIST == 59) {
        hoursIST = (hoursIST + 1) % 24;
    }

    if(secondsIST == 59) {
        minutesIST = (minutesIST + 1) % 60;
    }

    if(secondsIST == 59) {
        secondsIST = (secondsIST + 1) % 60;
    } 

    secondsIST++;
}, 1000);

