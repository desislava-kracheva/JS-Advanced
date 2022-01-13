function search() {
 let listItems = document.querySelectorAll('#towns>li');
 let searchInput = document.getElementById('searchText').value;
 

 let result = document.getElementById('result');

 let sum = 0;

 for(let list of listItems){
if(list.textContent.toLowerCase().includes(searchInput.toLowerCase())){

   list.style.textDecoration = 'underline';
   list.style.fontWeight = 'bold';
sum ++;
} else {
   list.style.textDecoration = '';
   list.style.fontWeight = '';

}


 }
 result.textContent = `${sum} matches found`;

}
