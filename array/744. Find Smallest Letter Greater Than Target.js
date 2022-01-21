// Question


// Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.

// Note that the letters wrap around.

// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Example 3:

// Input: letters = ["c","f","j"], target = "d"
// Output: "f"
 

// Constraints:

// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.




// Solution
var nextGreatestLetter = function(letters, target) {
    var character="abcdefghijklmnopqrstuvwxyz";
    var check;
    for(var i=0;i<character.length;i++){
        if(target==character[i]){
                check=i+1;
                break;
        }
    }
    for(var i=0;i<letters.length;i++){
        for(var j=check;j<character.length;j++){
            if(letters[i]==character[j] && letters[i]!=target){
                return character[j];
            }
        }
    }
    for(var i=0;i<letters.length;i++){
        for(var j=0;j<character.length;j++){
                if(letters[i]==character[j] && letters[i]!=target){
                    return character[j];
                }
         }
     }
};