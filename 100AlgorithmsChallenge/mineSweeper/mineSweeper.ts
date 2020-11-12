function minesweeper(matrix: boolean[][]): number[][] {

  
  let result = JSON.parse(JSON.stringify(matrix));

  for(let i=0; i<matrix.length; i++) {
      for(let j = 0; j<matrix[0].length; j++) {
        if(matrix[i][j]) {
            result[i][j] = 1;
        }else {
            result[i][j] = 0;
        }
      }
  }

  for(let i=0; i<matrix.length; i++) {
    for(let j = 0; j<matrix[0].length; j++) {
      if(matrix[i][j] === true) {
        if(matrix[i-1]) {
            if(matrix[i-1][j-1] == false) {
                result[i-1][j-1]+=1;
                console.log("Adjusted topleft")
            }
        }
        if(matrix[i-1]) {
            if(matrix[i-1][j] == false) {
                result[i-1][j]+=1;
                console.log("Adjusted above me")
            }
        }
        if(matrix[i-1]) {
            if(matrix[i-1][j+1] == false) {
                result[i-1][j+1]+=1;
                console.log("Adjusted top right")
            }
        }
        if(matrix[i]) {
            if(matrix[i][j-1] == false) {
                result[i][j-1]+=1;
                console.log("Adjusted my left")
            }
        }
        if(matrix[i]) {
            if(matrix[i][j+1] == false) {
                result[i][j+1]+=1;
                console.log("Adjusted my right ")
            }
        }
        if(matrix[i+1]) {
            if(matrix[i+1][j-1] == false) {
                result[i+1][j-1]+=1;
                console.log("Adjusted bottom left")
            }
        }
        if(matrix[i+1]) {
            if(matrix[i+1][j] == false) {
                result[i+1][j]+=1;
                console.log("Ajusted below me")
            }
        }
        if(matrix[i+1]) {
            if(matrix[i+1][j+1] == false) {
                result[i+1][j+1]+=1;
                console.log("Adjusted bottom right")
            }
        }
    
      }
    }
  }

  return result;

}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]])); 

/*
[[1, 2, 1],
[2, 1, 1],
[1, 1, 1]] 
*/