// Question



// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.




// Solution


var partitionLabels = function(s) {
    var data={};
    for(var i=0;i<s.length;i++){
        var key=s[i];
        data[key]=i;
    }
    console.log(data)
    var output=[];
    for(var i=0;i<s.length;i++){
        var startIndex=i;
        var Index=data[s[i]];
        while(true){
            if(i==Index){
              output.push(i-startIndex+1);
                break;  
            }
            i++;
            var nextEleIndex=data[s[i]];
            if(i==Index){
                output.push(i-startIndex+1);
                break;
            }
            else if(Index<nextEleIndex){
               Index= nextEleIndex;
            }
        }
    }
    return output;
};