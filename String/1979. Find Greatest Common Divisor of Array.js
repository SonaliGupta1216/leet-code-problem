// Question

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.
// Example 2:

// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.
// Example 3:

// Input: nums = [3,3]
// Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.
// The greatest common divisor of 3 and 3 is 3.
 

// Constraints:

// 2 <= nums.length <= 1000
// 1 <= nums[i] <= 1000




// Solution



var findGCD = function(nums) {
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                var temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp;
            }
        }
    }
    if(nums[nums.length-1]%nums[0]==0){
        return nums[0];
    }
    else{
        var q=nums[nums.length-1];
        var d=nums[0];
        while(q%d!=0){
            var r=q%d;
            q=d;
            d=r
        }
        return d;
    }
};