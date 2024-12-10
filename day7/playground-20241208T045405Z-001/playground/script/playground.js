console.log(Math.random());  //random number

console.log(Math.pow(2,3));  // power

//array
let numArr = [1,2,3,4,6,65];
console.log(numArr[3]);

let numArr1 = new Array("abc", "shiv");
console.log(numArr1[1]);

//Acessing data in array
console.log(numArr.length);


//add new data into array 
numArr.push(50);
numArr.push(100);

numArr.push(9);


console.log(numArr)

//Array pop delete array

numArr.pop();
console.log(numArr);

//shift 

console.log(numArr.shift());
console.log (numArr);

//unshift


//*/join  built-in methodlet userName =("mango " , "apple" , "banana");console.log(userName.join("*"));

//*




let fruit = ["apple" , "banana" , "orange"];
let pei = fruit.map(function (fruit){
    return  fruit  + "pie"
})

console.log(fruit);
console.log(pei);


//filtter 
let  num =[1 ,2,3,4,5,6,7,7];
let filttredNum = num.filter{(value) =>{
    if(value%2 ===0)
}}


//reduce 

let  num2 =[1 ,2,3,4,5,6,7,7];
console.log(num.reduce((accum , value ) => {
    return accum += value

}, 0 ))