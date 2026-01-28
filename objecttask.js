//Task-1
//-------------------------------------------------
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
// console.log(colors['golden rod'])

//Task-2
//-------------------------------------------------
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// let protertyName = "passenger capacity";
// car[protertyName]=5;

Object.assign(car, {"passenger capacity": 5})
// console.log(car);

//Task-3
//-------------------------------------------------
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
//Display the physics marks as output.
// console.log(student.physics.marks);


//Task-4
//-------------------------------------------------
let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
//Count the number of properties.
let propertiesCount = Object.keys(student1).length;
// console.log(propertiesCount);

// Task-5 (Hard)
//-----------------------------------------------
// Loop through an object and print the key-value pairs with their types

let vipPerson = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

console.log(Object.keys(vipPerson));
for(let key in vipPerson){
    if (Object.hasOwnProperty.call(vipPerson, key)){
        let value = vipPerson[key];
        let type = typeof value;
        console.log(`Key: ${key} | Value: ${value} | Type: ${type}`);
    }
}