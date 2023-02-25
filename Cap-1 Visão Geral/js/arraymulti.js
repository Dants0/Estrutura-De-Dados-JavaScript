const matrix = []

for(let i = 0; i < 2; i++) {
    matrix[i] = []
    for(let j = 0; j < 2; j++) {
        matrix[i][j] = []
        for(let k = 0; k < 2; k++) {
            matrix[i][j][k] = i+j+k;
        }
    }
}

for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
        for(let k = 0; k < matrix.length; k++) {
            console.log(matrix[i][j][k]);
        }
    }
}