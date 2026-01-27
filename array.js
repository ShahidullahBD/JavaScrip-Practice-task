/**
 * ### 1. Declare an array 
1. Declare an array with 5 elements containing fruits
2. console log the 3rd index element
3. change the value of the 2nd index element to jambura
4. console log the final array
 */

// let fruitsName = ['apple', 'orange', 'banana', 'jackfruit', 'painapple'];
// console.log(fruitsName[3]);
// fruitsName[1] = 'jambura'
// console.log(fruitsName);

// ### 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output

/*
* let touristDestination = ['Tokyo', 'Dubai', 'Seuol'];
    console.log(touristDestination);
    touristDestination.push('Shanghai');
    console.log(touristDestination);
    touristDestination.push('Makka', 'Madina');
    console.log(touristDestination);
    touristDestination.unshift('Dubai')
    console.log(touristDestination);
    touristDestination.pop();
    console.log(touristDestination);
*/

// ### 3. Checking Array Membership with ‘includes’

// **Instructions:**

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.

// const books = ['Al-Quran', 'Al-Hadis', 'javascript book', 'Kitabus-Sunnah', 'Sonar Tory',]
// console.log(books.includes('javascript book', 2));


// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.

// ----

// let arrayCheck1 = [10, 11, 31, 25];
// let arrayCheck2 = 35;
// let result = Array.isArray(arrayCheck2);
// console.log(arrayCheck1);
// console.log(result);

// ### 5. Combining Arrays

// **Instructions:**

// 1. Create two arrays of your choice.
// 2. Use the concat method to combine the two arrays into a new array.
// 3. Print both the original arrays and the combined array using console.log().

// let chooseOne = [10, 11, 50];
// console.log(chooseOne);
// let chooseTwo = ['Ten', 'Eleven', 'Fifty'];
// let result = chooseOne.concat(chooseTwo);
// console.log(result);

const goodFruits = ['apple', 'banana', 'paineapple', 'orange', 'tomato']
let result = goodFruits.copyWithin(3, 1, 4);
console.log(result);