// Part 1

function negToZero(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

negToZero([1,5,-20,7,-2]);

// Part 2

function moveForward(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i+1] != undefined){
            arr[i] = arr[i+1];
        }
        else{
            arr[i] = 0;
        }
    }
    return arr;
}

moveForward([1,2,3,4,5,6]);

// Part 3

function reverse(arr){
    var newarr = arr.reverse();
    return newarr;
}

reverse([1,2,3,4,5]);

// Part 4

function double(arr){
    var newarr = [];
    for(var i=0; i<arr.length; i++){
        newarr.push(arr[i], arr[i]);
    }
    return newarr;
}

double([1,2,3,4,5]);