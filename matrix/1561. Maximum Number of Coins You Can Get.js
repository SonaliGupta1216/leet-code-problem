// Question


// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

// In each step, you will choose any 3 piles of coins (not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with the maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.

// Return the maximum number of coins that you can have.

 

// Example 1:

// Input: piles = [2,4,1,2,7,8]
// Output: 9
// Explanation: Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.
// Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.
// The maximum number of coins which you can have are: 7 + 2 = 9.
// On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal.
// Example 2:

// Input: piles = [2,4,5]
// Output: 4
// Example 3:

// Input: piles = [9,8,7,6,5,1,2,3,4]
// Output: 18
 

// Constraints:

// 3 <= piles.length <= 105
// piles.length % 3 == 0
// 1 <= piles[i] <= 104





// Solution

// time limit exceeded in this solution
var maxCoins = function(piles) {
    for(var i=0;i<piles.length;i++){
        for(var j=i+1;j<piles.length;j++){
            if(piles[i]>piles[j]){
                var temp=piles[i];
                piles[i]=piles[j];
                piles[j]=temp;
            }
        }
    }
    var count=0;
    var k=piles.length-2;
    for(var i=0;i<(piles.length/3);i++){
        count +=piles[k];
        k=k-2;
    }
    return count ;
};


// Solution 

var maxCoins = function(piles) {
    var low=0;
    var high=piles.length-1;
    QuicklySort(low,high,piles);
    console.log(piles.join(" "));
    
    
    var count=0;
    var k=piles.length-2;
    for(var i=0;i<(piles.length/3);i++){
        count +=piles[k];
        k=k-2;
    }
    return count ;
};
function QuicklySort(low,high,arr){
    if(low>=high){
        return;
    }
    var pivot=partition(arr,low,high)
    QuicklySort(low,pivot-1,arr)
    QuicklySort(pivot+1,high,arr)
}
function partition(arr,low,high){
    var pivot=low;
    var i=low;
    var j=high;
    while(i<j){
        while(arr[i]<=arr[pivot]&&i<high){
            i++;
        }
        while(arr[j]>arr[pivot]&&j>low){
            j--;
        }
        if(i<j){
            swap(arr,i,j);
        }
    }
    swap(arr,pivot,j);
    return j;
}
function  swap(arr,i,j){
    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}