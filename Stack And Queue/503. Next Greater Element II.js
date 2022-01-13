// Question 

// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.
// Example 2:

// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]
 

// Constraints:

// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109


// Solution 


var nextGreaterElements = function(nums) {
    var stack=[];
    
    for(var i=0;i<nums.length;i++){
        var find=false;
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]<nums[j]){
                find=true;
                stack.push(nums[j]);
                break;
            }
        }
        if(find==false){
            for(var k=0;k<nums.length;k++){
               if(nums[i]<nums[k]){
                    find=true;
                    stack.push(nums[k]);
                    break;
                } 
            }
        }
        if(find==false){
            stack.push(-1);
        }
    }
   return stack; 
};