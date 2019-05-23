// const names = [];

// let namesCount = +prompt("How many users want to add?");

// while (isNaN(namesCount)) {
//   alert("Please, input a valid number.");
//   namesCount = +prompt("How many users want to add?");
// }

// for (let i = 1; i <= namesCount; i++) {
//   const username = prompt("Please, input " + i + "nd username:");
//   names.push(username);
// }

// alert("Result: " + names.join(", "));

// function FindMax(numbers)
// {
//   let max = numbers[0];
//   let min = numbers[0];

//   for(let i = 1; i < numbers.length; i++)
//   {
//     if(numbers[i] > max)
//     {
//       max = numbers[i];
//     }

//     if(numbers[i] < min)
//     {
//       min = numbers[i];
//     }
//   }

//   return max + min;
// }

// function LetterCounter(word, letter)
// {
//   let counter = 0;

//   for(let l of word)
//   {
//     if(l.toLowerCase() === letter.toLowerCase()) counter++;
//   }

//   return counter;
// }

//END OF HOMEWORKS

// function EvenSummer(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       sum += numbers[i];
//     }
//   }

//   return sum;
// }

// function TripleSummer(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 === 0) {
//       sum += numbers[i];
//     }
//   }

//   return sum;
// }

// function OlderSummer(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 18) {
//       sum += numbers[i];
//     }
//   }

//   return sum;
// }

//CALLBACK FUNCTION FOR SUMMING

// function Summer(numbers, callbackFunc) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (callbackFunc(numbers[i])) {
//       sum += numbers[i];
//     }
//   }

//   return sum;
// }

// Summer([10, 15, 12, 4], IsEven);
// Summer([10, 15, 12, 4], IsDivisibleBy3);
// Summer([10, 15, 12, 4], IsOlder);

// function ArrayFilter(arrayIn, callback)
// {
//   const arrayOut = [];

//   for (let i = 0; i < arrayIn.length; i++) {
//     if(callback(arrayIn[i]))
//     {
//       arrayOut.push(arrayIn[i]);
//     }
//   }

//   return arrayOut;
// }

// function IsEven(number)
// {
//   return number % 2 === 0;
// }

// function IsDivisibleBy3(number){
//   return number % 3 === 0;
// }

// function IsOlder(number){
//   return number > 18;
// }

// ArrayFilter([10, 15, 25, 30], IsEven);

// const mains = [...document.getElementsByClassName("main")];

// mains.forEach(function(main, index, mainArray){
//   if(index % 2 !== 0){
//     main.onclick = function(){ alert("clicked") }
//   }
// });