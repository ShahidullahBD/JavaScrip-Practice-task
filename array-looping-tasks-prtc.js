// node array-looping-tasks-prtc.js

// Task 1
//------------------------------------------------------
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output: ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// console.log(colors);

//method-1 --------------------------------------11111111111111111111111
// colors.reverse();
// console.log(colors);

//methode-2 ----------------------------------22222222222222222222222
// const revColors = [];
// for (const hue of colors){
//     // console.log(hue);
//     revColors.push(hue)
// }

// console.log(revColors);

//method-3 ----------------------------------33333333333333333333

// const reverseColor = [];

// for (let i = 0; i < colors.length; i++){
//     const hueColors = colors[i];
//     reverseColor.push(hueColors);
// }
// console.log(reverseColor);

//method-4-----------------------------------444444444444444444444

// const reverColor = [];
// for(let c = colors.length-1; c >= 0; c--){
//     const hue_2 = colors[c];
//     // console.log(colors);
//     reverColor.unshift(hue_2);
// }
// console.log(reverColor);

// Task 2
//--------------------------------------------------------------------
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

// filter method------------- 11111111111111111111111111111111111111

// const numbers = [12, 98, 5, 41, 23, 78, 46];

// const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter(numbers => numbers % 2 !== 0);
// console.log(oddNumbers);

// for of method ----------------22222222222222222222222222222222222
// const evenNumbers = [];
// for (const even of numbers){
//     if(even % 2 === 0){
//         evenNumbers.push(even);
//     }
// }
// console.log(evenNumbers);

// Task 3
//----------------------------------------------------------------------
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// var str = numbers.join("")
// console.log(str);

// var singleString = "";
// for (var str of numbers){
//     singleString += str;
// }
// console.log(singleString);

// Task 4 (Hard) (I think it was very easy: alhamdulillah)
//-------------------------------------------------------------------
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'

// Output:
// 'person working hard a am I'

const reversedSentence = statement.split(" ").reverse().join(" ");
console.log(reversedSentence);


// Task 5
//-----------------------------------------------------------------------
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

// const arrayNum = [1, 2, 3];
// console.log(arrayNum);
// const copiedArray = [...arrayNum];
// copiedArray[0] = 99;
// console.log(copiedArray);



// Task 6
//----------------------------------------------------------------
// Given an array of student objects, print each student’s name and marks.

const student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

// student.forEach(obj =>{
//     const values = Object.values(obj);
//     console.log(values.join(' scrored '))
// });

// Task 7
//-------------------------------------------------------------------
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// const numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// console.log(numbers);
// numbers[1]= [99, 4];
// console.log(numbers);