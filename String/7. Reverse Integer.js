// question


// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1



// Solution


var reverse = function(x) {
    var output=[];
    x=x.toString();
    if(x[0]!="-"){
        for(var i=x.length-1;i>=0;i--){
            output.push(x[i]);
        }
        while(output[0]=="0"){
            output.shift();
        }
        var str="";
        for(var i=0;i<output.length;i++){
            str += output[i];
        }
        str =+str;
        if(str>=2147483647 || str<= -2147483647){return 0;}
        return str;
    }
    if(x[0]=="-"){
        for(var i=x.length-1;i>0;i--){
            output.push(x[i]);
        }
        while(output[0]=="0"){
            output.shift();
        }
        var str="-";
        for(var i=0;i<output.length;i++){
            str += output[i];
        }
        str =+str;
        if(str>=2147483647 || str<= -2147483647){return 0;}
        return str;
    }
};