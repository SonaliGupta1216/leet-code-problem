// Question

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.



// Solution


var isAnagram = function(s, t) {
    var data1={};
    var data2={};
    if(s.length!=t.length){return false;}
    for(var i=0;i<s.length;i++){
        var key1=s[i];
        if(data1[key1]==undefined){
            data1[key1]=1;
        }
        else{
            data1[key1]++;
        }
    }
    for(var i=0;i<t.length;i++){
        var key2=t[i];
        if(data2[key2]==undefined){
            data2[key2]=1;
        }
        else{
            data2[key2]++;
        }
    }
    for(key1 in data1 ){
        var bool=false;
        for(key2 in data2){
            if(key1==key2){
                bool=true;
                if(data1[key1]!=data2[key2]){
                    return false;
                }
            }
        }
        if(bool==false){
            return false;
        }
    }
    return true;
};