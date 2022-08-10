window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish').addEventListener('click', onPublish);

  let profit = 0;
  let carList = document.getElementById('cars-list');

  let tableBody = document.getElementById('table-body');

  let makeElement = document.getElementById('make');
  let modelElement = document.getElementById('model');
  let yearElement = document.getElementById('year');
  let fuelElement = document.getElementById('fuel');
  let originalCostElement = document.getElementById('original-cost');
  let sellingPriceElement = document.getElementById('selling-price');

  function onPublish(ev) {
    ev.preventDefault();
    if (makeElement.value.trim() === '' || modelElement.value.trim() === '' || yearElement.value.trim() === '' || fuelElement.value.trim() === '' || originalCostElement.value.trim() === '' || sellingPriceElement.value.trim() === '' || originalCostElement.value.trim() > sellingPriceElement.value.trim()){
      return;
    }

    const mainTr = e('tr', { class: 'row' });
    e('td', {}, makeElement.value, mainTr);
    e('td', {}, modelElement.value, mainTr);
    e('td', {}, yearElement.value, mainTr);
    e('td', {}, fuelElement.value, mainTr);
    e('td', {}, originalCostElement.value, mainTr);
    e('td', {}, sellingPriceElement.value, mainTr);
    const buttonTd = e('td', {}, null, mainTr);
    const editBtn = e('td', { class: 'action-btn edit' }, 'Edit', buttonTd);
    const sellBtn = e('td', { class: 'action-btn sell' }, 'Sell', buttonTd);

    tableBody.appendChild(mainTr);

    editBtn.addEventListener('click', onEdit.bind(null, makeElement.value, modelElement.value, yearElement.value, fuelElement.value, originalCostElement.value, sellingPriceElement.value, mainTr, ev))
    sellBtn.addEventListener('click', onSell.bind(null, mainTr, makeElement.value, modelElement.value, yearElement.value, sellingPriceElement.value - originalCostElement.value, ev))

    makeElement.value = '';
    modelElement.value = '';
    yearElement.value = '';
    fuelElement.value = '';
    originalCostElement.value = '';
    sellingPriceElement.value = '';


  function onEdit(make, model, year, fuel, originalCost, sellingPrice, mainTr, ev) {
    ev.preventDefault();

    makeElement.value = make;
    modelElement.value = model;
    yearElement.value = year;
    fuelElement.value = fuel;
    
    originalCostElement.value = originalCost;
    sellingPriceElement.value = sellingPrice;

    mainTr.remove();
}
      
}
  function onSell(mainTr, make, model, year, difference, ev) {
    ev.preventDefault();

    const li = e('li', { class: 'each-list' });
    e('span', {}, `${make} ${model}`, li);
    e('span', {}, year, li);
    e('span', {}, difference, li);

    profit += Number(difference);

    carList.appendChild(li);
    document.getElementById('profit').textContent = profit.toFixed(2);
    mainTr.remove();
  }

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
