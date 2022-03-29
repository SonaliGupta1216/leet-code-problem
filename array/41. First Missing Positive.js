// Question 

// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1



// Solution


var firstMissingPositive = function(nums) {
    var array=[];
    for(var j=0;j<nums.length;j++){
       if(nums[j]>0){
           var k=nums[j]-1;
           array[k]=1;
       }
    }
    for(var i=0;i<array.length;i++){
        if(array[i]==undefined){
            return i+1;
        }
    }
    return array.length+1;
};