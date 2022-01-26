// Question


// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1
 

// Follow up:

// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?




// Solution



var setZeroes = function(matrix) {
    console.log(matrix)
    var row=[];
    var col=[];
    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
                if(row[row.length-1]!==i){
                    row.push(i);}
               if(col[col.length-1]!==j){
                    col.push(j);}
            }
        }
    }
    for(var i=0;i<row.length;i++){
        for(var j=0;j<matrix[0].length;j++){
            matrix[row[i]][j]=0;
        }
    }
    for(var i=0;i<col.length;i++){
        for(var j=0;j<matrix.length;j++){
             matrix[j][col[i]]=0;
        }
    }
    console.log(matrix)
};