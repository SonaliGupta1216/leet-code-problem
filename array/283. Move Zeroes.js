// Question :------

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1



// Solution  :------


var moveZeroes = function(nums) {
    for(var i=0;i<nums.length;i++){
        for(var j=i;j<nums.length;j++){
            if(nums[i]==0 && nums[j]!==0){
                var temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }   
        }
    }
    
};
