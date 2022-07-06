function search() {
   let searchElement = document.getElementById('searchText');
   let allLiElements = Array.from(document.querySelectorAll('#towns li'));
   let searchText = searchElement.value;

   allLiElements.forEach(el => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';
   });

   let filterLi = allLiElements.filter(x => x.textContent.includes(searchText));
   let mappedLi = filterLi.forEach(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration = 'underline';

   });
   let resultDiv = document.getElementById('result');
   resultDiv.textContent = `${filterLi.length} matches found`;
}
