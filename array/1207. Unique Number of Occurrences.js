// Question


// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000




// Solution



var uniqueOccurrences = function(arr) {
    var data={};
    for(var i=0;i<arr.length;i++){
        var key=arr[i];
        if(data[key]==undefined){
            data[key]=1;
        }
        else if(data[key]!=undefined){
            data[key]++;
        }
    }
    var array=[];
    for(key in data){
        array.push(data[key]);
    }
    console.log(array);
    console.log(data)
    for(var i=0;i<array.length-1;i++){
        for(var j=i+1;j<array.length;j++){
            if(array[i]==array[j]){
                return false;
            }
        }
    }
    return true;
};