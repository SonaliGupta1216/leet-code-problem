// Question 

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.



// Solution

var reverseWords = function(s) {
    var k=s.split(" ");
    var s="";
    for(var i=0;i<k.length;i++){
        var str=k[i];
        for(var j=0;j<str.length;j++){
            s=s+str[str.length-1-j];
        }
        if(i<k.length-1){s=s+" ";}
    }
    return s;
};