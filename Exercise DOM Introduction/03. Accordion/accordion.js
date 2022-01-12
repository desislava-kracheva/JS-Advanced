function toggle() {

let button = document.querySelector('.button');
let divExtra = document.getElementById('extra');

let isHidden = button.textContent == 'More' || button.textContent === '';
divExtra.style.display = (isHidden) ? 'block' : 'none';

button.textContent =isHidden ? 'Less' : 'More';





}