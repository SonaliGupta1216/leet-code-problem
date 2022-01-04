// Question :--------

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:
// Input: s = "leetcode"
// Output: 0



// Example 2:
// Input: s = "loveleetcode"
// Output: 2



// Example 3:
// Input: s = "aabb"
// Output: -1
 


// Constraints:
// 1 <= s.length <= 105
// s consists of only lowercase English letters.



// Solution  :------

var firstUniqChar = function(s) {
    var data={};
    var data1={};
    for(var i=0;i<s.length;i++){
        var key=s[i];
        if(data[key]==undefined){
             data[key]=i;
        }
        if(data1[key]==undefined){
            data1[key]=0;
        }
        else if(data1[key]!=undefined){
             data1[key]++;
        }
    }
    for(key in data1){
        if(data1[key]==0){
            var ele=key;
            for(key in data){
                if(ele==key){
                     return data[key];
                }
            }
        }
    }
    return -1;
};