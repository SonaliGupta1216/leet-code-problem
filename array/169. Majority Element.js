// Question :------

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:
// Input: nums = [3,2,3]
// Output: 3




// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 


// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1



// Solution  :------

var majorityElement = function(nums) {
    var data={};
     for(var i=0;i<nums.length;i++){
         var key=nums[i];
         if(data[key]==undefined){
             data[key]=1;
         }
         else if(data[key]!=undefined){
             data[key]++;
         }
     }
     var longest=0;
     var major;
     for(key in data){
         if(data[key]>longest){
             longest=data[key];
             major=key;
         }
     }
     return major;
 };