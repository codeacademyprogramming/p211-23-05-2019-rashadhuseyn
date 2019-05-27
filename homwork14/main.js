//homework1
let array = [47, 58, 74, 90, 85, 25, 12, 23];
let array2 = array.filter(divide5);

function divide5(value) {
  return value %5 === 0;
}

console.log(array2);

//homework2

let arr = [47, 58, 74, 90, 85, 25, 12, 23];
let arr2 = arr.map(strike2);

function strike2(value) {
  return value * 2;
}

console.log(arr2);

//homework3
// let words=["salam","necesen","qaraj","dalga","bolge"]
// let words2 = words.map(halfdivider);

// function halfdivider(value) {
//     return value =
//   }

//   console.log(words2);

//homework4

let numbers = [47, 58, 74, 90, 85, 25, 12, 23];
let numbers1 =numbers.filter(divide2)
let sum = numbers1.reduce(odd);

function divide2(value) {
    return value %2 === 0;
  }

function odd(num1,num2) {
  return num1 + num2;
}
console.log(sum);


//homework5

let nums = [47, 58, 74, 90, 85, 25, 12, 23];
let nums1 =nums.filter(divide5)
let result = nums1.reduce(odd);

console.log(result);


//homework6

let mail = ["mail.ru","gmail.com","yandex.ru","code.edu.az","hotmail.com"]
let mail2 = mail.find(mailfinder)

function mailfinder(value) {
    return value === "code.edu.az";
  }

  console.log(mail2 );