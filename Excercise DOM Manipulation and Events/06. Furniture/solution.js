function solve() {

const textareas = document.querySelectorAll('textarea');
const buttons = document.querySelectorAll('button');
const tbody = document.querySelector('tbody');

buttons[0].addEventListener('click', function(e) {
const arr = JSON.parse(textareas[0].value);

for(let el of arr){
const row =   document.createElement('tr');
const col = document.createElement('td');
const img = document.createElement('img');
img.setAttribute('src', el.img );
col.appendChild(img);
const col2 = document.createElement('td');
const p = document.createElement('p');
p.textContent = el.name;
col2.appendChild(p);
const col3 = document.createElement('td');
const p2 = document.createElement('p');
p2.textContent = Number(el.price);
col3.appendChild(p2);
const col4 = document.createElement('td');
const p3 = document.createElement('p');
p3.textContent = Number(el.decFactor)
col4.appendChild(p3);
const col5 = document.createElement('td');
const input = document.createElement('input');
input.setAttribute('type', 'checkbox');
col5.appendChild(input);

row.appendChild(col);
row.appendChild(col2);
row.appendChild(col3);
row.appendChild(col4);
row.appendChild(col5);
tbody.appendChild(row);

}

});

buttons[1].addEventListener('click', function(e) {

  const furniture = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked'))
  .map(input => input.parentNode.parentNode  );

const result = {
bouhgt: [],
totalPrice : 0,
decFactorSum:0

}

for(let row of furniture){
  const cells = row.children;
  const name = cells[1].children[0].textContent;
  console.log(name);
  result.bouhgt.push(name);

  const price = Number(cells[2].children[0].textContent);
  result.totalPrice+= price;

  const factor = Number(cells[3].children[0].textContent);
  result.decFactorSum += factor; 

}

textareas[1].value= `Bought furniture: ${result.bouhgt.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.decFactorSum / result.bouhgt.length}`
  
})


}