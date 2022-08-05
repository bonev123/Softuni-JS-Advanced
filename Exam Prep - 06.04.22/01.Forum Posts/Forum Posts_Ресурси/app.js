window.addEventListener("load", solve);

function solve() {
  let btnElement = document.getElementById('publish-btn');

  btnElement.addEventListener('click', (e) => {
    e.preventDefault();

    let titleElement = document.getElementById('post-title');
    let categoryElement = document.getElementById('post-category');
    let contentElement = document.getElementById('post-content');

    if (titleElement.value.trim() === '' || categoryElement.value.trim() === '' || contentElement.value.trim() === '') {
      return;
    }

    let ulElement = document.getElementById('review-list')

    let liElement = document.createElement('li');
    liElement.classList.add('rpost');

    let articleElement = document.createElement('article');

    let h4Element = document.createElement('h4');
    h4Element.textContent = `${titleElement.value}`

    let categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${categoryElement.value}`

    let contentP = document.createElement('p');
    contentP.textContent = `Content: ${contentElement.value}`

    articleElement.appendChild(h4Element);
    articleElement.appendChild(categoryP);
    articleElement.appendChild(contentP);

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');

    editBtn.textContent = `Edit`

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');

    approveBtn.textContent = `Approve`

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtn);
    liElement.appendChild(approveBtn);
    
    ulElement.appendChild(liElement);


    titleElement.value = '';
    categoryElement.value = '';
    contentElement.value = '';

    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const h4Items = Array.from(ulElement.querySelectorAll('h4')).map(h4 => h4.textContent);
      const pItems = Array.from(ulElement.querySelectorAll('p')).map(p => p.textContent);

      titleElement.value = h4Items.shift().trim();
      
      pItems.forEach(p => {
        if (p.includes('Category: ')) {
          categoryElement.value = p.slice(9);
        }
        if (p.includes('Content: ')) {
          contentElement.value = p.slice(8);
        }
      });
      ulElement.textContent = ''
    });


    approveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let publishEl = document.getElementById('published-list')
      
      liElement.remove();
      liElement.removeChild(editBtn);
      liElement.removeChild(approveBtn);
      publishEl.appendChild(liElement);
    });

    let clearBtn = document.getElementById('clear-btn')
    clearBtn.addEventListener('click', (e) => {
      liElement.remove();
    })
    
    
    
  });
}
