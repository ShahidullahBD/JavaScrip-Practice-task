// let number = 1; // Loop variable
// let sum = 0;  // Loop variable

// while(number <=100){  // Loop condition
//     console.log(number); // Loop statement
//     sum = sum + number; 
//     console.log('Total', sum);
//     number++; // Loop variable change
// }

// for(first part; second part; third part;){
//     loop statement
// }

// for (loop variable declaration; loop condition; loop variable change (value increment or decrement)){
// lopp statement}

// for (let num = 1; num <= 5; num++){
//     console.log(num);
// }

// for(let i = 1; i < 10; i=i+2){
//     console.log(i);
// }


// for (let i = 0; i < 20; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// for (let i = 1; i < 20; i+=2){
//    console.log(i);
// }


// give the list numbers between 1 to 50 divisible by 7

// for (let i = 1; i <= 50; i++){
//     if(i%7===0 || i%5===0){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 50; i++){
//     if(i%7===0 && i%5===0){
//         console.log(i);
//     }
// }


// give me the sum of numbers from 1 to 20 that are divisible by 3

// let total = 0;
// for(let i = 0; i < 20; i++){
//     if (i % 3 === 0){
//         console.log(i);
//         total = total+i;
//         console.log('total', total);
//     }    
// }
// console.log('total number is: ', total);

// for (let i=0; i < 100; i++){
//     console.log(i);
//     if (i>=5){
//         break;
//     }
// }

// let n = 54;

// while(n > 25){
//     console.log(n);
//     n--;
//     if(n < 50){
//         break
//     }
// }

// for (let n = 0; n < 10; n++){
//     if (n % 2 === 1){
//         continue;
//     }
//     console.log(n);
// }

let n = 0;

while(n < 50){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n);
}