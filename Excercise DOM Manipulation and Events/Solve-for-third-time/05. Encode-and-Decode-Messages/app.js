function encodeAndDecodeMessages() {
    let textareas = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button')
 
    const map = {

        encode: {
    
            text: textareas[0],
            button: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        }, 
        decode : {
    
            text: textareas[1],
            button: buttons[1],
            func: (char) =>String.fromCharCode(char.charCodeAt(0) -1)
        }
        
    }

 document.getElementById('main').addEventListener('click', function(e) {

if(e.target.tagName !== 'BUTTON'){
    return;
}

let type = e.target.textContent.trim().toLowerCase().includes('encode') ? 'encode' : 'decode';

let message = map[type].text.value.split('').map(map[type].func).join('');

map.encode.text.value = '';
map.decode.text.value = message;



    })
}