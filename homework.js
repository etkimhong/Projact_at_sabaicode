

//homework 1

// let i;
// for(i=0;i<10;i++){
//     console.log(i+1);
// }


//homework 2

// let i;
// for(i=10;i>0;i--){
//     console.log(i);
// }


//homework 3

// let score = 58;
// if (score >= 90) {
//    console.log("A");
// } 
// else if (score >= 80) {
//     console.log("B");
// } 
// else if (score >= 70) {
//     console.log("C");
// } 
// else if (score >= 60) {
//     console.log("D");
// } 
// else if (score >= 50) {
//     console.log("E");
// } 
// else {
//     console.log("F");
// }


//homework 4

// let employees = ["Lara", "Evee", "Simi"];
// let salary = [1000, 2000, 120.90];

// for (let i = 0; i < employees.length; i++) {
//     console.log(`Employee name: ${employees[i]} - Employee salary: ${salary[i]}`);
// }


//homework 5
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

//homework 6

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < 10; i++) {

    if (i % 2 == 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("old number :"+evenCount);
console.log("even number:"+oddCount);

//homework 7

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

//homework 8

// let sum = 0;
// for (let i = 0; i <5; i++) {
//     sum=sum + i;
// }

// console.log(`Sum: ${sum}`);

//homework 9

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let num = 1; num <= 100; num++) {
//     if (isPrime(num)) {
//         console.log(num);
//     }
// }

//homework 10

// let numbers = [10, 5, 8, 20, 3];
// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log(`Largest number: ${largest}`);

