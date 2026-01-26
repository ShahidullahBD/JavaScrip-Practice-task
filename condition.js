/***
Task-One
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// let burgerPrice = 500;

// if (burgerPrice>500){
//     console.log("Free Coke")
// } else {
//     console.log("Coke: 30tk")
// }

/*** 
Task-Two
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// let bmiWeight = 12.6;

// if (bmiWeight < 18.5){
//     console.log("You are underweight.")
// } else if(bmiWeight>=18.5 && bmiWeight<=24.9){
//     console.log("You are normal.")
// } else if(bmiWeight>=25 && bmiWeight<=29.9){
//     console.log("You are overweight")
// } else{
//     console.log("You are obese.")
// }



/***
Task-Three
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// let studentsScore = 75;

// if (studentsScore >= 90 && studentsScore <= 100){
//     console.log("Grade A")
// }else if(studentsScore >= 80 && studentsScore <= 89){
//     console.log("Grade B")
// }else if(studentsScore >= 70 && studentsScore <= 79){
//     console.log("Grade C")
// }else if(studentsScore >= 60 && studentsScore <= 69){
//     console.log("Grade D")
// }else {
//     console.log("Grade F")
// }

/***
Task-Four

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// let friendScore = 85;
// let yourScore = 70;

// if (friendScore > 80){
//     console.log("Will go for lunch")
// }else if(friendScore < 80 && friendScore >= 60){
//     console.log("Good luck freind, Next time.")
// }else if(friendScore < 60 && friendScore >= 40){
//     console.log("Message unseen.")
// }else if(friendScore < 40){
//     console.log("Friend bloked")
// }else{
    
// }


/***
Task-Five

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// let num1 = 40;
// let num2 = 20;

// if (num1 > num2){
//     console.log(num1 * 2)
// }else{
//     console.log(num1 + num2)
// };

/***
Task = six

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

// let passengerAge = 42;

// if (passengerAge < 10){
//     console.log("Tecket Fare: Free")
// }else if(passengerAge > 10 && passengerAge < 60){
//     console.log("Ticket Fare: 50% discount")
// }else if(passengerAge >= 60){
//     console.log("Ticket fare: 15% discount")
// }else{
//     console.log("Ticket fare: Regular fare 800 tk")
// }