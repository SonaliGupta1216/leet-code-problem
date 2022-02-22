// Question


// Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

 

// Example 1:


// Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
// Example 2:


// Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
// Output: false
// Explanation: It is impossible to make mat equal to target by rotating mat.
// Example 3:


// Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.
 

// Constraints:

// n == mat.length == target.length
// n == mat[i].length == target[i].length
// 1 <= n <= 10
// mat[i][j] and target[i][j] are either 0 or 1.




// Solution



var findRotation = function(mat, target) {
    var n=mat.length-1;
    var number=4;
while(number>0){
    for(var i=0;i<mat.length/2;i++){
        for(var j=i;j<mat.length-1-i;j++){
            var temp=mat[i][j];
            mat[i][j]=mat[n-j][i];
            mat[n-j][i]=mat[n-i][n-j];
            mat[n-i][n-j]=mat[j][n-i];
            mat[j][n-i]=temp;
        }
    }
    console.log(mat)
    var bool=true;
    for(var i=0;i<mat.length;i++){
        for(var j=0;j<mat.length;j++){
            if(mat[i][j]!==target[i][j]){
                var bool=false;
            }
        }
    }
    if(bool==true){
        return true;
    }

    number--;
}
    return false;
};