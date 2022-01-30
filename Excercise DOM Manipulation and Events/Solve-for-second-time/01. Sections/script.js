function create(words) {
   let contentDiv = document.getElementById('content');

   for(let word of words){
let div = document.createElement('div');
let p = document.createElement('p');
p.textContent = word;
p.style.display = 'none';
div.appendChild(p);

contentDiv.appendChild(div);

   }

   contentDiv.addEventListener('click', showParagraph);

   function showParagraph(e){

   if(e.target.matches('#content div')){

      let p = e.target.children[0];
      p.style.display = 'block';
   }

   }




}