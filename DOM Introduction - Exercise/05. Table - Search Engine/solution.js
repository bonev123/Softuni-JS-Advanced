function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //1. select els
      let searchElement = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('tbody tr'))

      let searchText = searchElement.value;
      //2. clear styles from previous search
      rowElements.forEach(el => {
         el.className = '';
      });
      //3.find matching row els to text and modify style for matching rows
      let filteredRows = rowElements.filter(el => {
         let values = Array.from(el.children);
         if(values.some(x => x.textContent.includes(searchText))) {
            el.className = 'select';
         }
      })

      // 4. clear txt field
      searchElement.value = '';
   }
}