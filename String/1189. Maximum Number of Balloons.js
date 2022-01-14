// Question 


// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:

// Input: text = "nlaebolko"
// Output: 1
// Example 2:


// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.


// Solution 


var maxNumberOfBalloons = function(text) {
    var data={};
    var count=0;
    for(var i=0;i<text.length;i++){
        if(text[i]=="b"||text[i]=="a"||text[i]=="n"){
            var key=text[i];
            if(data[key]==undefined){
                data[key]=1;
                count++;
            }
            else{
                data[key]++;
            }
        }
        else if(text[i]=="l"||text[i]=="o"){
            var key=text[i];
            if(data[key]==undefined){
                data[key]=1/2;
                count++;
            }
            else{
                data[key] +=1/2;
            }
        }
    }
    if(count==5){
        var min=100000;
        for(key in data){
            if(data[key]<min){
                min=data[key];
            }
        }
        min=parseInt(min)
        return min;
    }
    else{
        return 0;
    }
};