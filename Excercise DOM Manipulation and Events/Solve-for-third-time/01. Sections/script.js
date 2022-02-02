function create(words) {
  const content = document.getElementById('content');

  for ( let word of words){

   let divElement = document.createElement('div');
   let pElement = document.createElement('p');
   pElement.textContent = word;
   pElement.style.display = 'none';
   divElement.appendChild(pElement);

   divElement.addEventListener('click',function (e) {
      let p = e.target.children[0];
      console.log(e.target.children[0]);
      const isVisible = p.style.display === 'block';
      console.log(isVisible);
      p.style.display = isVisible ? 'none' : 'block';
   
      
     })
     content.appendChild(divElement);

  }
  

}
