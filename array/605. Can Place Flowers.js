// Question

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length




// Solution



var canPlaceFlowers = function(flowerbed, n) {
    if(n==0){return true;}
    if(n==1 && flowerbed.length==1 && flowerbed[0]==0){return true;}
    for(var i=0;i<flowerbed.length;i++){
         console.log(i)
        if(flowerbed[i+1]==0 && flowerbed[i]==0 && n>0 && i==0){
            n--;
             console.log(i)
            i++;
             console.log(i)
            console.log("KK")
        }
        else if(flowerbed[i-1]==0 && flowerbed[i+1]==0 && flowerbed[i]==0 && n>0){
            n--;
            i++;
        }
        else if(flowerbed[i-1]==0 && flowerbed[i]==0 && n>0 && i==flowerbed.length-1){
            n--;
            i++;
             console.log("KK2")
        }
        
    }
    if(n==0){return true;}
    return false;
};