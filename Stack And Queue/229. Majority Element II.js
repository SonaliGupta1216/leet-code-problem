// Question :------

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:
// Input: nums = [3,2,3]
// Output: [3]



// Example 2:
// Input: nums = [1]
// Output: [1]



// Example 3:
// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:
// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109


// Solution :------

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
     var ele=[];
     for(key in data){
         if(data[key]>(nums.length/3)){
             ele.push(key);
         }
     }
     return ele;
 };