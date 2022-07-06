function subtract() {
    let num1El = document.getElementById('firstNumber');
    let num2El = document.getElementById('secondNumber');
    let num1 = Number(num1El.value);
    let num2 = Number(num2El.value);
    
    let result = num1 - num2
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    
}