// Question 

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n




// Solution


var findDisappearedNumbers = function(nums) {
    var array=[];
    var output=[];
    for(var i=0;i<nums.length;i++){
        array.push(0);
    }
    for(var j=0;j<nums.length;j++){
       if(array[nums[j]-1]==0){
           var k=nums[j]-1;
           array[k]=nums[j];
       }
    }
    for(var i=0;i<array.length;i++){
        if(array[i]==0){
            output.push(i+1);
        }
    }
        return output;
        
};