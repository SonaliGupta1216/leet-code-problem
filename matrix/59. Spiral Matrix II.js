// Questionn 


// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

// Example 1:


// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 20




// Solution


var generateMatrix = function(n) {
    let arr = [];
    for (var i = 0; i < n; i++) {
      arr[i] = [];
    }
    var startRow=0;
    var startCol=0;
    var endRow=n-1;
    var endCol=n-1;
    var count=0;
    var k=1;
    while(count<n*n){
        for(var i=startCol;i<=endCol && count<n*n;i++){
            arr[startRow][i]=k;
            count++;
            k++;
        }
        startRow++;
        for(var i=startRow;i<=endRow &&  count<n*n;i++){
            arr[i][endCol]=k;
            count++;
            k++
        }
        endCol--;
           for(var i=endCol;i>=startCol &&  count<n*n;i--){
               arr[endRow][i]=k;
                count++;
               k++
            } 
        endRow--;
        for(var i=endRow;i>=startRow &&  count<n*n;i--){
               arr[i][startCol]=k;
                count++;
            k++
            }
        startCol++;
    }
    return arr;
};