function solve(matrix) {
  let totalSum = matrix[0].reduce((a, b) => { return a + b }) 

  for (let row = 0; row < matrix.length; row++) { 
    
    let sumRow = 0; 
    let sumCol = 0;
    
    for (let col = 0; col < matrix.length; col++) {
      sumRow += matrix[col][row];
      sumCol += matrix[row][col];
    }
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
