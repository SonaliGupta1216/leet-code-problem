// Question:--------

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:=
// Input: nums = [1,3,5,6], target = 5
// Output: 2



// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1



// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


// Solution:------

var searchInsert = function(nums, target) {
    var low=0;
    var high=nums.length-1;
    var k=findingIndex(nums,target,low,high);
    return k
};
function findingIndex(nums,target,low,high){
        var mid=parseInt(low+(high-low)/2);
        if(nums[mid]==target){
            return mid;
        }
        if(nums[mid]>target&&nums[mid-1]<target&&mid>0){
            return mid;
        }
        else if(nums[mid]>target&&mid==0){
            return mid;
        }
        else if(nums[mid]>target&&nums[mid-1]>target){
            high=mid-1;
            return findingIndex(nums,target,low,high);
        }
        else  if(nums[mid]<target&&nums[mid+1]>target&&mid+1==nums.length-1){
            return mid+1;
        }
        else if(nums[mid]<target&&nums.length-1==mid){
            return mid+1;
        }
        else if(nums[mid]<target&&nums[mid+1]<target){
            low=mid+1;;
            return findingIndex(nums,target,low,high);
        }
        else if(nums[mid]<target){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    return  findingIndex(nums,target,low,high);
}