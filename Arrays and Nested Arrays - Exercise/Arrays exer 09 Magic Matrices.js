function solve(matrix) {
  // let allSums = [];
  // let sumRow = 0;
  // let sumCol = 0;
 
  // for (let row = 0; row < matrix.length; row++) {
  //     sumRow = 0;
  //     sumCol = 0;
  //     for (let col = 0; col < matrix[row].length; col++) {
  //         sumRow += matrix[row][col];
  //         sumCol += matrix[col][row];
  //     }
  //     allSums.push(sumRow);
  //     allSums.push(sumCol);
  // }
  // let isMagical = allSums.every(s => s === allSums[0]);
 
  // return isMagical;
 
  // тук се смята сбора на всеки ред, тъй като по условие, за да е магичесдка една матрица тя трябва да има еднаква сума на елементите на всеки ред и колона
  let totalSum = matrix[0].reduce((a, b) => { return a + b }) 
  //тук се завърта цикъл за редовете
  for (let row = 0; row < matrix.length; row++) { 
    // декларират се променливите, които ще държат сумата за всеки ред и колона за всяка итерация
    let sumRow = 0; 
    let sumCol = 0;
    // тук се завърта цикъл и за колоните
    for (let col = 0; col < matrix.length; col++) {
      // тук се смята сумата на всеки ред и колона
      sumRow += matrix[col][row];
      sumCol += matrix[row][col];
    }
    // тук се прави сравнение дали сумата на всеки ред и колона е еднаква, ако не е се връща false, както е по условие
    if(totalSum!=sumRow||totalSum!=sumCol)
    {
      return false
    }
  }
  return true
}

console.log(solve([[4, 5, 6],
  [6, 5, 4],
  [5, 5, 5]]))