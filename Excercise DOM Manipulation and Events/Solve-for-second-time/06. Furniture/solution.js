// неоткрита грешка

function solve() {

  let textareas = document.querySelectorAll('#exercise textarea');
  let generateTextarea = textareas[0];
  let buyTextarea = textareas[1];

  let buttonElements = document.querySelectorAll('#exercise button');
  let generateButton = buttonElements[0];
  let buyButton = buttonElements[1];
  let tbody = document.querySelector('.table tbody')

  generateButton.addEventListener('click', generateItems);

  function generateItems(e){

    let items = JSON.parse(generateTextarea.value);
items.forEach(el => {
  let tr = document.createElement('tr')
let imageTd = document.createElement('td');

const img = document.createElement('img');
img.setAttribute('src', el.img );
imageTd.appendChild(img);


 let nameTd = document.createElement('td');
 let nameP = document.createElement('p');
 nameP.textContent = el.name;
 nameTd.appendChild(nameP);

 let priceTd = document.createElement('td');
 let priceP = document.createElement('p');
 priceP.textContent = el.price;
 priceTd.appendChild(nameP);


 let decFactorTd = document.createElement('td');
 let decFactorP = document.createElement('p');
 decFactorP.textContent =el.decFactor ;
 decFactorTd.appendChild(decFactorP);
 
 let checkboxTd = document.createElement('td');
 let checkbox = document.createElement('input');
 checkbox.type = 'checkbox';
 checkboxTd.appendChild(checkbox);

 tr.appendChild(imageTd)
 tr.appendChild(nameTd) 
 tr.appendChild(priceTd)
 tr.appendChild(decFactorTd)
 tr.appendChild(checkboxTd)
 
 tbody.appendChild(tr);



});



buyButton.addEventListener('click', calculateBoughtFurniture);


function calculateBoughtFurniture(e){

  let tRows = Array.from(document.querySelectorAll('.table tbody tr'));
  let selectedRows = tRows.filter(row => row.querySelectorAll('input:checked').length > 0);

  let names = selectedRows.map(row => row.querySelectorAll('td:nth-of-type(2) p')
  .map(x => x.textContent)
  .join(', '));

  let prices = selectedRows.map(row => row.querySelector('td:nth-of-type(3) p')
  .map(x => Number(x.textContent)));

  let decFactor = selectedRows.map(row => row.querySelector('td:nth-of-type(4) p')
  .map(x => Number(x.textContent)));

  let totalPrice = prices.reduce((acc,el => acc+el, 0)).toFixed(2);
  let averageDecFactor = decFactor.reduce((acc, el => acc+ el, 0))/ decFactor.length;

let furnitureText = `Bought furnitute: ${names}`;
let pricesText = `Total price: ${totalPrice}`;
let decFactorText = `Average decoration factor: ${averageDecFactor}`;

buyTextarea.textContent =`${furnitureText}\n${pricesText}\n${decFactorText}`

}
  
  }
  

}