// Question

// You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

// If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
// For example, the word "apple" becomes "applema".
// If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
// Return the final sentence representing the conversion from sentence to Goat Latin.

 

// Example 1:

// Input: sentence = "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:

// Input: sentence = "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 

// Constraints:

// 1 <= sentence.length <= 150
// sentence consists of English letters and spaces.
// sentence has no leading or trailing spaces.
// All the words in sentence are separated by a single space.




// Solution



var toGoatLatin = function(sentence) {
    var k=sentence.split(" ");
    var output="";
    for(var i=0;i<k.length;i++){
        var str=k[i];
        var s="";
        for(var j=0;j<str.length;j++){
            if(str[0]=="a" ||str[0]=="e" ||str[0]=="i" ||str[0]=="o" ||str[0]=="u" 
              ||str[0]=="A" ||str[0]=="E" ||str[0]=="I" ||str[0]=="O" ||str[0]=="U" ){
                s =str+"ma";
                var x="";
                for(var y=0;y<=i;y++){
                    x +="a";
                }
                output +=s+x+" ";
                break;
            }
            else{
                var x="";
                if(j>0){
                    s +=str[j];
                }
                if(j===str.length-1){
                    for(var y=0;y<=i;y++){
                        x +="a";
                    }
                    output +=s+str[0]+"ma"+x+" ";
                    break;
                }
            }
        }
    }
    output=output.trim();
    return output;
};