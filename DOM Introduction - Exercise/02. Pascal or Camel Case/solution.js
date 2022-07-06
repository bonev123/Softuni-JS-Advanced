function solve() {
  let wordEl = document.getElementById('text');
  let caseEl = document.getElementById('naming-convention');

  // 2. parse data
  let text = wordEl.value;
  let namingConvention = caseEl.value;

  let result = applyNamingConvention(text, namingConvention);

  let spanEl = document.getElementById('result');
  spanEl.textContent = result;

  function applyNamingConvention(text, convention) {
    const conventionSwitch = {
      'Pascal Case': () => text.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(''), 
      //1. pravim dumite izcqlo lowercase i posle manipulirame kakto ni e udobno
      // x - za vsqka duma vzemi purvi simvol
      'Camel Case': () => text.toLowerCase().split(' ').map((x,i) => x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x).join(''),
      default: () => 'Error!'
    };
    return (conventionSwitch[convention] || conventionSwitch.default)();
  }
  
}