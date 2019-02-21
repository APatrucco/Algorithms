// Part 1

function arrays(arr, y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count++;
        }
    }
    console.log("There are " + count + " values greater than y.");
}

arrays([1,2,3,4,5], 2);

// Part 2

function minMaxAvg(arr2){
    var max = arr2[0];
    var min = arr2[0];
    var avg = 0;
    
    for(var i = 0; i < arr2.length; i++){
        if(arr2[i] > max){
            max = arr2[i];
        }
        else if(arr2[i] < min){
            min = arr2[i];
        }
        avg += arr2[i];
    }
    avg /= arr2.length;
    console.log("The minimum is " + min);
    console.log("The maximum is " + max);
    console.log("The average is " + avg);
}

minMaxAvg([1,3,5,11,23]);

// Part 3

function replaceNegatives(arr3){
    var newarr = [];
    
    for(var i = 0; i < arr3.length; i++){
        if(arr3[i] < 0){
            newarr[i] = "Dojo";
        }
        else{
            newarr[i] = arr3[i];
        }
    }
    return newarr;
}

console.log(replaceNegatives([12, -1, 15, 3, -5]));

// Part 4

function removeVals(arr4, start, end){
    arr4.splice(start, end-start+1);
    return arr4;
}

console.log(removeVals([20,30,40,50,60,70,80,90,100,110,120,130],3,8));