// Questionn 



// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.




// Solution


var sortColors = function(nums) {
    var starting=0;
    var ending=nums.length-1;
    for(var i=nums.length-1;i>=0;i--){
        while(nums[starting]==0){
            starting++;
        }
        if(nums[i]==0 && starting<i && nums[starting]!=0){
            var temp=nums[starting];
            nums[starting]=nums[i];
            nums[i]=temp;
            starting++;
        }
    }
    for(var i=0;i<nums.length;i++){
        while(nums[ending]==2){
            ending--;
        }
        if(nums[i]==2 && ending>i && nums[ending]!=2){
            var temp=nums[ending]
            nums[ending]=nums[i];
            nums[i]=temp;
            ending--;
            console.log(i)    
        }
    }
    console.log(nums)
};