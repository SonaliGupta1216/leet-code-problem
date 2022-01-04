// Question :------

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.



// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.




// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 


// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.



// Solution  :------

var isPalindrome = function(s) {
    var lowercase="abcdefghijklmnopqrstuvwxyz";
    var numbers="0123456789";
    var newStr="";
    s=s.toLowerCase()
    for(var i=0;i<s.length;i++){
        for(var j=0;j<lowercase.length;j++){
            if(s[i]==lowercase[j]){
                newStr +=(s[i]);
                break;
            }
        }
        for(var j=0;j<numbers.length;j++){
            if(s[i]==numbers[j]){
                newStr +=(s[i]);
                break;
            }
        }
    }
    console.log(newStr)
    for(var i=0;i<parseInt(newStr.length/2);i++){
        if(newStr[i]!=newStr[newStr.length-1-i]){
            return false;
        }
    }
    return true;
};