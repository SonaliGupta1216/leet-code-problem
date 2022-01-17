// Question

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of printable ASCII characters.


// Solution


var toLowerCase = function(s) {
    var upperAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerAlpha="abcdefghijklmnopqrstuvwxyz";
    var str="";
    for(var i=0;i<s.length;i++){
        var bool=false;
        for(var j=0;j<upperAlpha.length;j++){
            if(s[i]==upperAlpha[j]){
                str=str+lowerAlpha[j];
                bool=true;
                break;
            }
        }
        if(bool==false){
                str=str+s[i];

        }
    }
    return str;
};