// Question 


// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
 

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.




// Solution



var summaryRanges = function(nums) {
    var output=[];
    var str="";
    for(var i=0;i<nums.length;i++){
        for(var j=i;j<nums.length;j++){
            if(nums[j]+1==nums[j+1]){
                continue;
            }
            else if(nums[j]+1!=nums[j+1] && i!=j && j <nums.length){
                var string="";
                string +=nums[i]+"->"+nums[j];
                output.push(string);
                i=j;
                break;
            }
            else if(nums[i]+1!==nums[j]){
                var k=nums[i].toString();
                output.push(k);
                break;
            }
        }
    }
    return output;
};