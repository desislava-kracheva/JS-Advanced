function addItem() {

    let newItemText = document.getElementById('newItemText').value;
    let items = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = newItemText
    items.appendChild(liElement);
    newItemText = '';

}