function attachEventsListeners() {

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');


    daysButton.addEventListener('click' , (e) => {
        let days = Number(daysInput.value);
        let hours = days * 24;
        let minutes = days *24 *60;
        let seconds = days * 24 * 60 * 60;
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds
    });

    hoursButton.addEventListener('click' , (e) => {
      
let hours = Number(hoursInput.value);
let days = hours / 24;
let minutes = hours*60;
let seconds = hours *60 * 60 ;

hoursInput.value = hours;
minutesInput. value = minutes;
secondsInput.value = seconds;
daysInput.value = days;


    });
    minutesButton.addEventListener('click' , (e) => {

let minutes = Number(minutesInput.value);
let hours = minutes / 60;
let seconds = minutes * 60;
let days = minutes /60 / 24 ;

hoursInput.value = hours;
secondsInput.value = seconds;
daysInput.value = days;

    });

    secondsButton.addEventListener('click' , (e) => {
let seconds = Number(secondsInput.value);
let minutes = seconds /60;
let hours = seconds /60 /60;
let days = seconds /60 /60/24;

minutesInput.value = minutes;
hoursInput.value = hours;
daysInput.value = days

    })


}