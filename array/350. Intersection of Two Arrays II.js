// Question


// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000



// Solution



var intersect = function(nums1, nums2) {
    if(nums2>nums1){
        var long=nums2;
        var short=nums1;
    }
    else if(nums2<nums1){
        var long=nums1;
        var short=nums2;
    }
    else{
        var long=nums1;
        var short=nums2;
    }
    var output=[];
    var index=[];
    for(var i=0;i<short.length;i++){
        for(var j=0;j<long.length;j++){
            if(short[i]==long[j] && (!index.includes(j))){
               output.push(short[i]);
                index.push(j);
                break;
            }
        }
    }
    return output;
};