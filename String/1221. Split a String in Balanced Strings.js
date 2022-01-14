// Question

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it in the maximum amount of balanced strings.

// Return the maximum amount of split balanced strings.

 

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
 

// Constraints:

// 1 <= s.length <= 1000
// s[i] is either 'L' or 'R'.
// s is a balanced string.



// Solution


var balancedStringSplit = function(s) {
    var stack1=[];
    var count=0;
    for(var i=0;i<s.length;i++){
        if(s[i]=="L"){
            if(stack1.length!=0 && stack1[stack1.length-1]=="-x"){
                stack1.pop();
                if(stack1.length==0){count++;}
            }
            else if(stack1.length!=0 && stack1[stack1.length-1]!="-x"){
                stack1.push("x");
            }
            else{
                stack1.push("x");
            }
        }
        else if(s[i]=="R"){
            if(stack1.length!=0 && stack1[stack1.length-1]=="x"){
                stack1.pop();
                if(stack1.length==0){count++;}
            }
            else if(stack1.length!=0 && stack1[stack1.length-1]!="x"){
                stack1.push("-x");
            }
            else{
                stack1.push("-x");
            }
        }
    }
    return count;
};