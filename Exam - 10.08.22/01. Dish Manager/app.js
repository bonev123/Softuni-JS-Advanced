window.addEventListener("load", solve);

function solve() {
  document.getElementById('form-btn').addEventListener('click', onSubmit);
  //document.getElementById('clear-btn').addEventListener('click', onClear);
  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let genderElement = document.getElementById('genderSelect');
  let dishDescElement = document.getElementById('task');

  
  
  
  let bodyElement = document.getElementById('in-progress')

  function onSubmit(ev) {
    ev.preventDefault();
    
    if (firstNameElement.value.trim() === '' || lastNameElement.value.trim() === '' || ageElement.value.trim() === '' || dishDescElement.value.trim() === '' ){
      return;
    }
    const mainLi = e('li', { class: 'each-line' });
    const descArticle = e('article', {}, null, mainLi);
    e('h4', {}, `${firstNameElement.value} ${lastNameElement.value}`, descArticle);
    e('p', {}, `${genderElement.value}, ${ageElement.value}`, descArticle);
    e('p', {}, dishDescElement.value, descArticle);
    
    
    const editBtn = e('button', { class: 'edit-btn' }, 'Edit',  mainLi);
    const completeBtn = e('button', { class: 'complete-btn' }, 'Mark as complete',  mainLi);

    bodyElement.appendChild(mainLi);

    editBtn.addEventListener('click', onEdit.bind(null, firstNameElement.value, lastNameElement.value, ageElement.value, genderElement.value, dishDescElement.value, mainLi, ev))
    //completeBtn.addEventListener('click', onComplete.bind(null, mainLi, firstNameElement.value, lastNameElement.value, ageElement.value, genderElement.value, dishDescElement.value, ev))

    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    genderElement.value = '';
    dishDescElement.value = '';

    completeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let finishedElement = document.getElementById('finished');
      mainLi.removeChild(editBtn);
      mainLi.removeChild(completeBtn);
      mainLi.remove();
    
    finishedElement.appendChild(mainLi);
    });
    
    let clearBtn = document.getElementById('clear-btn')
    clearBtn.addEventListener('click', (e) => {
      mainLi.remove();
    });
  }

  function onEdit(fName, lName, age, gender, dishDesc, mainLi, ev) {
    ev.preventDefault();

    firstNameElement.value = fName;
    lastNameElement.value = lName;
    ageElement.value = age;
    genderElement.value = gender;
    dishDescElement.value = dishDesc;

    mainLi.remove();
}

  /* function onComplete(mainLi, ev, editBtn, completeBtn) {
    ev.preventDefault();
    mainLi.removeChild(editBtn);
    mainLi.removeChild(completeBtn);
    mainLi.remove();
    
    finishedElement.appendChild(mainLi);

  } */

  //function onClear(mainLi) {
    //mainLi.remove();
  //}

  function e(type, attributes, text, parentNode) {
    const element = document.createElement(type);

    for (let [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value)
    }

    if (text) {
        element.textContent = text;
    }

    if (parentNode) {
        parentNode.appendChild(element);
        
    }

    return element;
  }
}
