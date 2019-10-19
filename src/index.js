function fill(matrix, m, n, p){
  for (let a = 0; a <= 8; a++){
      if (a != m && matrix[a][n] == p){
          return false;
      }
  }
  
  for (let a = 0; a <= 8; a++){
      if (a != n && matrix[m][a] == p){
          return false;
      }
  }

  y = Math.floor((m / 3)) * 3;
  x = Math.floor((n / 3)) * 3;
  for (let a = 0; a < 3; a++){
      for (let b = 0; b < 3; b++){
          if (a != m && b != n && matrix[y + a][x + b] == p){
              return false;
          }
      }
  }
  return true; 
}

function getZeroes(matrix){
  let zeroes = 0;
  for(let i = 0; i <= 8; i++){
      for (let j = 0; j <= 8; j++){
          if(matrix[i][j]==0){
             zeroes++
          }
      }
  }
  if(zeroes>0){
      return false;
  }
  return true;
}

module.exports = function solveSudoku(matrix) {  
  for(let i = 0; i <= 8; i++){
    for (let j = 0; j <= 8; j++){
        if (matrix[i][j] !== 0){
            continue;
        }
        for (let k = 1; k <= 9; k++){
            if (fill(matrix, i, j, k) == true){
                matrix[i][j] = k;
                solveSudoku(matrix);
                if (getZeroes(matrix) == true){
                    return matrix;
                }
                matrix[i][j] = 0;
            }
        }
        return false;
    }
}
}