// Question :------

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1



// Solution  :------

var isPowerOfThree = function(n) {
    if(n<=0){return false;}
    if(n==1){return true;}
    for(var i=1;i<=(parseInt(n/2)+1);i++){
          if(3**i==n){
             return true;
         }
        else if(3**i>=n){
             return false;
         }
     }
     return false;
 };
 