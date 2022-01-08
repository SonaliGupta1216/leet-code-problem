// Question :------

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1



// Solution  :------

var addDigits = function(num) {
    num= num.toString();
    var array=[];
    while(num.length!=1){
        var sum=0;
        for(var i=0;i<num.length;i++){
            var k=+num[i];
            sum =sum +k;
        }
        if(array.includes(sum)){
            return false;
            
        }
        num=sum.toString();
        array.push(sum);
    }
    return num;
};