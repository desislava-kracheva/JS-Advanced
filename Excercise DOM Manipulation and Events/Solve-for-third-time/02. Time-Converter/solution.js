function attachEventsListeners() {

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', function(e){

 let days = Number(daysInput.value);
 let hours = days * 24;
 let minutes = hours * 60;
 let seconds = minutes *60; 

 hoursInput.value = hours;
 minutesInput.value = minutes;
 secondsInput.value = seconds;

    })

hoursBtn.addEventListener('click' , function(e){
let hours = Number(hoursInput.value);
let days = hours/24;
let minutes = hours*60;
let seconds = minutes *60;

daysInput.value = days;
minutesInput.value = minutes;
secondsInput.value = seconds;


})

minutesBtn.addEventListener('click' , function(e){
    
    let minutes = Number(minutesInput.value);

    let hours = minutes/60;
    let days = hours *24;
    let seconds = minutes *60;
    
    daysInput.value = days;
    hoursInput.value = hours;
    secondsInput.value = seconds;
    
    
    });

    secondsBtn.addEventListener('click' , function(e){
    
        let seconds = Number(secondsInput.value);
        let minutes = seconds/60
        let hours = minutes/60;
        let days = hours /24;

        
        minutesInput.value = minutes
        daysInput.value = days;
        hoursInput.value = hours;
        
        
        
        })





}