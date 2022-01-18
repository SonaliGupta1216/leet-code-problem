// Question

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.




// Solution


var areOccurrencesEqual = function(s) {
    var data={};
    for(var i=0;i<s.length;i++){
        var key=s[i];
        if(data[key]==undefined){
            data[key]=1;
        }
        else{
            data[key]++;
        }
    }
    var output=0;
    for(key in data){
        if(output==0){
            output=data[key];
        }
        else if(data[key]!=output){
            return false;
        }
    }
    return true;
};