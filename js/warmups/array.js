//1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop and prints all elements of the array in the console using console.log.
function arrayFor(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i])
    }

}
//2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log.
function arrayWhile(array){
    let i=0
    while(i<array.length){
        console.log(array[i])
        i++
     }
}
//3.Write a function called sum that takes an array of numbers as a parameter and returns the sum of the numbers in the array.
function sum(array){
    let s=0
    for(let i=0;i<array.length;i++){
        s=s+array[i]
    }
    return s
}
//4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.
// fhemtouch 
//5.Write a function called sumStartAt that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the inputted index, until the end of the array
function SumUntil(array,index){
    let s=0
    for(let i=0;i<=index;i++){
        s=s+array[i]
    }
    return s
}
//6 fhmtouch
//