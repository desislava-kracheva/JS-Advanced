function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('#main .profile button'));

    buttons.forEach(el => {
        el.addEventListener('click', onClick);
    })

    function onClick(e){

let button = e.target;
let profile = button.parentElement;
let radioButton =  profile.querySelector('input:checked');
if(radioButton.value == 'unlock'){

    let hiddenFieldElement = button.previousElementSibling;
    hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block' ? 'none' : 'block';
    button.textContent = button.textContent === 'Show more' ? 'Hide it': 'Show more'
 } 


    }
}
