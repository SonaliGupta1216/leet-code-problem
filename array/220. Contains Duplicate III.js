// Question :------

// Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

 

// Example 1:
// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true



// Example 2:
// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true



// Example 3:
// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false
 


// Constraints:
// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 104
// 0 <= t <= 231 - 1



// Solution  :------

var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(var i=0;i<nums.length;i++){
        for(var j=1+i;j<= k+i && j<nums.length;j++){
            if(Math.abs(nums[j]-nums[i])<=t){
                return true;
            }
        }
    }
    return false;
};