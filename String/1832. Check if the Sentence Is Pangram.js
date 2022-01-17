// Question

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false
 

// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.


// Solution

var checkIfPangram = function(sentence) {
    var alpha="abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<alpha.length;i++){
        var bool=false;
        for(var j=0;j<sentence.length;j++){
            if(alpha[i]==sentence[j]){
                bool=true;
                break;
            }
        }
        if(bool==false){
            return false;
        }
    }
    return true;
};