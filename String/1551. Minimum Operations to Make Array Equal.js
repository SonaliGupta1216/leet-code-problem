// Question 


// You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e., 0 <= i < n).

// In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e., perform arr[x] -=1 and arr[y] += 1). The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.

// Given an integer n, the length of the array, return the minimum number of operations needed to make all the elements of arr equal.

 

// Example 1:

// Input: n = 3
// Output: 2
// Explanation: arr = [1, 3, 5]
// First operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]
// In the second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].
// Example 2:

// Input: n = 6
// Output: 9
 

// Constraints:

// 1 <= n <= 104




// Solution


var minOperations = function(n) {
    var count=0;
    var array=[];
    for(var i=0;i<n;i++){
        array.push((2*i)+1);
    }
    if(array.length%2==1){
        var mid=parseInt((array.length/2));
        for(var i=0;i<array.length/2;i++){
            while(array[i]!=array[mid] && 
                  array[array.length-i-1]!=array[mid]){
                array[i]=array[i]+1;
                array[array.length-i-1]=array[array.length-i-1]-1;
                count++;
            }
        }
         return count;
    }

    if(array.length%2!=1){
        var mid=parseInt((array.length/2));
        var k=array[mid]-1;
        array[mid]=k;
        array[mid-1]=k;
        k=k.toString();
        count++;
        for(var i=0;i<array.length/2;i++){
            while(array[i]!=k && array[array.length-i-1]!=k){
                array[i]=array[i]+1;
                array[array.length-i-1]=array[array.length-i-1]-1;
                count++;
            }
        }
         return count;
    }
   
};







var minOperations = function(n) {
    var count=0;
    if(n%2==1){
        var mid=parseInt(n/2)+1;
        var no=(2*mid)-1;
        for(var i=1;i<no;i=i+2){
           count=count+(no-i);
        }
        return count; 
    }
    for(var i=1;i<=n;i=i+2){
        count=count+i;
    }
    return count;
};