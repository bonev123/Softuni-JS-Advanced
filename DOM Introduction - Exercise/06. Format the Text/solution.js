function solve() {
  //1. Select els
  let textAreaEl = document.getElementById('input')
  //2. extract text from text area
  let text = textAreaEl.value;
  //3.split by . to get sentences
  let sentences = text.split('.').filter(x => x !== '').map(x => x + '.');
  //4.group sentences by 3 in paragraph
  let paragraphRoof = Math.ceil(sentences.length / 3);
  //5. insert paragraph into dom
  let resultDiv = document.getElementById('output');
  for (let i = 0; i < paragraphRoof; i++) {
    resultDiv.innerHTML += `<p>${sentences.splice(0,3).join('')}</p>`
  }
}