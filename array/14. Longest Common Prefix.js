// Question:---------

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"



// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 


// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.




// Solution:---------
var longestCommonPrefix = function(strs) {
    // putting the common prefix in the variable
    var prefix="";

    // if the length of strs is 1 then we directly say that self the string is prefix of self
    if(strs.length==1){
        return strs[0];
    }

    // putting first two string in new variable
    var one=strs[0];
    var another=strs[1];

    // comparing the first two string and finding the prefix of it 
    for(var i=0,j=0;i<one.length,j<another.length;i++,j++){
        if(one[i]==another[j]){
            prefix=prefix+one[i];
        }
        else{
            break;
        }
    }

    // if there is no prefix of these two string then we directly say that there is no prefix in common
    if(prefix.length==0){
        return "";
    }

    // using for-loop for finding the prefix of rest string 
    for(var k=2;k<strs.length;k++){

        // taking one string and one new varaible in which we can save the prefix between the current string and the common prefix
        var x=strs[k];
        var newprefix="";

        // comparing the prefix and the current string to finding the prefix in between them
        for(var j=0;j<prefix.length;j++){
            if(x[j]==prefix[j]){
                newprefix +=x[j];
            }
            else{
                break;
            }
        }

        // saving the current prefix in global prefix 
       prefix=newprefix;
    }

    // if there is no prefix then return empty string 
    if(prefix.length==0){
      return "";
    }

    // if there is element in prefix then print the prefix 
    return prefix;
};

