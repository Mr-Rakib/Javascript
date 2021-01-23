document.getElementById('alarmBtn').addEventListener('click', SetAlarm);
var audio = new Audio('Files/alarm-tone-2.mp3');

function ringAlarm()
{
    var notification = document.getElementById('alarm-remainder')
    notification.innerHTML = `Alarm ringing`;
    setInterval(() => {
        notification.style.display = ((notification.style.display == "none") ? "" : "none");
    }, 500);

    audio.play();
}

function SetAlarm()
{
    let now = new Date();
    let input = document.getElementById('alarm').value;
    var inputDate  = new Date(input);

    let alarmInterval = inputDate - now;
    if(alarmInterval >=0){
        document.getElementById('alarm-remainder').innerHTML = `Alarm set at ${inputDate}`;
        setTimeout(() => {
            ringAlarm();
        }, alarmInterval);
    }
    
}