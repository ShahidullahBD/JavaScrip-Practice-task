//------slice an split mathod of sting----------
const address = 'Rajshahi'
const part = address.slice(3,6);

// console.log(part);

// const sentence = 'You are a good girl, so I love you';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendsStr = 'Rahim,Karim,Fahim,Amin,Labib,Sakib,Rakib';
const friends = friendsStr.split(',');
// console.log(friends);

const realFriends = ['Rahim', 'Karim','Fahim', 'Amin',  'Labib', 'Sakib',  'Rakib'];
// console.log(realFriends.join());
// console.log(realFriends.join('|'));
// console.log(realFriends.join('-'));


// -------Concet Mathod of string-----------------
const firstName = 'Abidul';
const lastName = 'Islam';
const fullName = firstName + ' ' + lastName;

// console.log(fullName);
// console.log(firstName.concat(' ').concat(lastName));
// console.log(fullName.includes('a'));

//-------reverse of stirng --------

const sentence = 'I am learing Web Dev.'

let reverse = '';
for (const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

let rev = '';
for (let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
// console.log(rev);

//----- shortcut way to revers the string ----------

const reversed = sentence.split('').reverse().join('');
console.log(reversed);