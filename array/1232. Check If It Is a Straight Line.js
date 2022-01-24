// Question

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

 

 

// Example 1:



// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:



// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false
 

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.





// Solution



var checkStraightLine = function(coordinates) {
    var m=(coordinates[1][1]-coordinates[0][1])/
                (coordinates[1][0]-coordinates[0][0]);
    var bool=true;
    for(var i=1;i<coordinates.length-1;i++){
        if(coordinates[i][0]!==0){
            bool=false;
        }
    }
    if(bool==true){
        return true;
    }
    for(var i=1;i<coordinates.length-1;i++){
        if(coordinates[i][1]!==0){
            bool=false;
        }
    }
    if(bool==true){
        return true;
    }
    
    for(var i=1;i<coordinates.length-1;i++){
        var  m1=(coordinates[i+1][1]-coordinates[i][1])/
                (coordinates[i+1][0]-coordinates[i][0]);
        if(m!=m1){return false;}
    }
    return true;
};