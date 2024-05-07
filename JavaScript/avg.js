 console.log("Calculate the average of the numbers in an array of numbers");
 const array=[12,13,45,20,50,60,80,10];
 let sum = 0;
 let count = array.length;

 for( let i = 0; i < count;i++ ){
    sum += array[i];
 }
 const average = sum / count;
 console.log(average);