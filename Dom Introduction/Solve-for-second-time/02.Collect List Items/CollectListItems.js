function extractText() {
    
let liElements =Array.from( document.querySelectorAll('li'));
let elemText = liElements.map(el =>el.textContent);
let textarea = document.getElementById('result');
textarea.value = elemText.join('\n');



}