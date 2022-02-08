function solve() {
let textareas = document.querySelectorAll('textarea');
let buttons = document.querySelectorAll('button');
let tbody = document.querySelector('tbody')
buttons[0].addEventListener('click', function (e) {
  let arr = JSON.parse(textareas[0].value);
  
for(let el of arr){
let row = document.createElement('tr');

let imageTd = document.createElement('td');
let image = document.createElement('img');
image.setAttribute('src', el.img);
imageTd.appendChild(image);


let nameTd = document.createElement('td');
let nameP = document.createElement('p');
nameP.textContent = el.name;
nameTd.appendChild(nameP);

let priceTd = document.createElement('td');
let priceP = document.createElement('p');
priceP.textContent = Number(el.price);
priceTd.appendChild(priceP);

let decFactorTd = document.createElement('td');
let decFactorP = document.createElement('p');
decFactorP.textContent = Number(el.decFactor);
decFactorTd.appendChild(decFactorP);

let chekTd = document.createElement('td');
let  checkInput  = document.createElement('input');
checkInput.setAttribute('type', 'checkbox');
checkInput.value = Number(el.decFactor) ;
chekTd.appendChild(checkInput);

row.appendChild(imageTd);
row.appendChild(nameTd);
row.appendChild(priceTd);
row.appendChild(decFactorTd);
row.appendChild(chekTd);

tbody.appendChild(row)


}



});

buttons[1].addEventListener('click', function(e){
  let furnitute = document.
})

}

{/* <tbody>
<tr>
    <td>
        <img
            src="https://www.lidl-shop.nl/media/fcf868f9526b38d0b0a43cc2ace72b80.jpeg">
    </td>
    <td>
        <p>Office chair</p>
    </td>
    <td>
        <p>160</p>
    </td>
    <td>
        <p>0.5</p>
    </td>
    <td>
        <input type="checkbox" disabled />
    </td>
</tr>
</tbody> */}