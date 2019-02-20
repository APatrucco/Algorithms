// Paper Algos II

// -------- PART 1 ---------

function a(x,y){
    return 5;
}
console.log(a(5,5))

// Result for above: 5

function a(x,y){
    z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));

// Result for above: [2, 2, 5], [2, 2, 5], [6, 8, 5], [6, 8, 5]

function a(x){
   z = [];
   z.push(x);
   z.pop();
   z.push(x);
   z.push(x);
   return z;
}
y = a(2);
y.push(5);
console.log(y);

 // Result for above: [2, 2, 5]

function a(x){
   if(x[0] <x [1]) {
      return true;
   }
   else {
      return false;
   }
}
b = a([2,3,4,5])
console.log(b);

 // Result for above: true

function a(x){
   for(var i=0; i<x.length; i++){
      if(x[i] > 0){
         x[i] = “Coding”
      }
   }
}
console.log(a([1,2,3,4]))

// Result for above: Coding, Coding, Coding, Coding

function a(x){
   for(var i=0; i<x.length; i++){
      if(x[i] > 5){
         x[i] = “Coding”
      }
      else if(x[i] < 0){
         x[i] = “Dojo”
      }
   }
}
console.log(a([5,7,-1,4]))

// Result for above: Dojo, Coding, Dojo, Dojo

function a(x){
   if(x[0] > x[1]) {
      return x[1];
   }
   return 10;
}
b = a([5,10])
console.log(b);

// Result for above: 10

function sum(x){
   sum = 0;
   for(var i=0; i<x.length; i++){
      sum = sum + x[i];
      console.log(sum);
   }
   return sum;
}

// Result for above: the function was not run

// -------- PART 2 ---------

function printAverage(x){
   sum = 0;
   for(var i=0; i < x.length; i++){
      sum += x[i];
   }
   sum /= x.length;
   return sum;
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([5,2,8]);
console.log(y); // should log 5

// -----------------------------

function returnOddArray(){
   var newarr = [];
   for(var i = 1; i <= 255; i += 2){
      newarr.push(i);
   }
   return newarr;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]

// -----------------------------

function squareValue(x){
   for(var i=0; i < x.length; i++){
      x[i] *= x[i];
   }
   return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
  
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]