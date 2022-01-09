// Question :------

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
 

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.



// Solution  :------


var backspaceCompare = function(s, t) {
    var newS=[];
    for(var i=0;i<s.length;i++){
        if(s[i]=="#" && newS.length>0){
            newS.pop();
        }
        else if(s[i]!="#"){
            newS.push(s[i]);
        }
    }
    var newT=[];
    for(var i=0;i<t.length;i++){
        if(t[i]=="#" && newT.length>0){
            newT.pop();
        }
        else if(t[i]!="#"){
            newT.push(t[i]);
        }
    }
    if(newS.length!==newT.length){return false;}
    for(var i=0;i<newS.length;i++){
        if(newS[i]!=newT[i]){
            return false;
        }
    }
    return true;
};