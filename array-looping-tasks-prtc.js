// node array-looping-tasks-prtc.js

// Task 1
//------------------------------------------------------
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output: ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// console.log(colors);

//method-1 --------------------------------------11111111111111111111111
colors.reverse();
console.log(colors);

//methode-2 ----------------------------------22222222222222222222222
const revColors = [];
for (const hue of colors){
    // console.log(hue);
    revColors.push(hue)
}

console.log(revColors);

//method-3 ----------------------------------33333333333333333333

const reverseColor = [];

for (let i = 0; i < colors.length; i++){
    const hueColors = colors[i];
    reverseColor.push(hueColors);
}
console.log(reverseColor);

//method-4-----------------------------------444444444444444444444

const reverColor = [];
for(let c = colors.length-1; c >= 0; c--){
    const hue_2 = colors[c];
    // console.log(colors);
    reverColor.unshift(hue_2);
}
console.log(reverColor);

