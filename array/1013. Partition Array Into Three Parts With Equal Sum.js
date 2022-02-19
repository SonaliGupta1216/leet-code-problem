// Question

// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

// Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

 

// Example 1:

// Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// Example 2:

// Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false
// Example 3:

// Input: arr = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 

// Constraints:

// 3 <= arr.length <= 5 * 104
// -104 <= arr[i] <= 104




// Solution


var canThreePartsEqualSum = function(arr) {
    var totalSum=0;
    for(var i=0;i<arr.length;i++){
        totalSum +=arr[i];
    }
    if(totalSum%3!=0){
        return false;
    }
    totalSum =totalSum/3;
    var sum=0;
    var index1 = -1;
    for(var i=0;i<arr.length;i++){
        if(i==0){sum +=arr[i];}
        else if(sum==totalSum){
            index1=i;
            sum=0;
            break;
        }
        else {
            sum +=arr[i];
        }   
    }
    if(index1 == -1 || index1==arr.length-1){
        return false;
    }
    var index2=-1;
    for(var i=index1;i<arr.length;i++){
        if(i==index1){sum +=arr[i];}
        else if(sum==totalSum){
            index2=i;
            sum=0;
            break;
        }
        else{
            sum +=arr[i];
        }   
    }
    if(index2 == -1 ||index2==arr.length){
        return false;
    }
    for(var i=index2;i<arr.length;i++){
            sum +=arr[i];
    }
    if(sum==totalSum){return true;}
    return false;
    
};