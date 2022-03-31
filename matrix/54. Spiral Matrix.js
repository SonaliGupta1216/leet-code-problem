// Queestionn 

// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100



// Solution


var spiralOrder = function(matrix) {
    var startRow=0;
    var startCol=0;
    var endRow=matrix.length-1;
    var endCol=matrix[0].length-1;
    var count=0;
    var n=matrix.length;
    var m=matrix[0].length;
    var output=[];
    while(count<n*m){
        for(var i=startCol;i<=endCol && count<n*m;i++){
            output.push(matrix[startRow][i]);
            count++;
        }
        startRow++;
        for(var i=startRow;i<=endRow &&  count<n*m;i++){
            output.push(matrix[i][endCol]);
            count++;
        }
        endCol--;
           for(var i=endCol;i>=startCol &&  count<n*m;i--){
                output.push(matrix[endRow][i]);
                count++;
            } 
        endRow--;
        for(var i=endRow;i>=startRow &&  count<n*m;i--){
                output.push(matrix[i][startCol]);
                count++;
            }
        startCol++;
    }
    return output;
};