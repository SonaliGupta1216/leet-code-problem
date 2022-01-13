// question


// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

 

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:

// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 

// Constraints:

// 1 <= words.length <= 104
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.



// Solution


var countConsistentStrings = function(allowed, words) {
    var count=words.length;
    for(var i=0;i<words.length;i++){
        var str=words[i];
        for(var j=0;j<str.length;j++){
            var bool=false;
            for(var k=0;k<allowed.length;k++){
                if(str[j]==allowed[k]){
                    bool=true;
                    break;
                } 
            }
            if(bool==false){
                console.log(str)
                count--;
                break;
            }
        }
    }
    return count;
};