function addItem() {
    
    let ulItem = document.getElementById('items');
    let liItem = document.createElement('li')
    let inputItem = document.getElementById('newItemText').value;
    liItem.textContent = inputItem;
    ulItem.appendChild(liItem);
 
    



}