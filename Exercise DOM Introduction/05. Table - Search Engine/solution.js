function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const rows = document.querySelectorAll('tbody tr');

   function onClick() {
    const input = document.getElementById('searchField').value.toLowerCase();

    for(let row of rows){

      if(row.textContent.toLocaleLowerCase().includes(input)){

row.setAttribute('class', 'select');

      } else {

         row.removeAttribute('class');
      }
      

    }


   }
}