// Question

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 



// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].



// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]



// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?




// solution 

var twoSum = function(nums, target) {

    // use for-loop for pick up one by one element from array
    for(var i=0;i<nums.length;i++){

        // variable for storing the current value  of  "target - nums[i]"
        var find=target-nums[i];
        
        // another for-loop for searching the variable in the array
        for(var j=i+1;j<nums.length;j++){

            // if condition for searching the value either is present or not
            if(nums[j]==find){

                //if present the value then return the value of indices of two no whose sum is equal to target 
                return[i,j];
            }
        }
    }    
};
