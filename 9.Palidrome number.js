// question:---

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 


// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.




// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.





// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:
// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?





// solution:-----


var isPalindrome = function(x) {


    //converting the number into string
    x=x.toString();

    // checking the number if it is negative or not
    if(x<0){

        // if the number is -ve, then  return 
            return false;
    }

    // storing the index of last element in new variable
    var j=x.length-1;

    // using for-loop for checking if the number is palidrome or not
    for(var i=0;i<parseInt(x.length/2);i++){ 

        if(x[i]!=x[j]){
            return false;
            
        }  
        j--;
    }
    return true;
};
