let x = 10;
const y = "10";

console.log(x == y); //true - checks whether the data stored in two variables are equal or not
console.log(x === y);//strict equality operator checks the type of data stored in the variable.

let a = 10;

if (a) {
    console.log("A");
} else {
    console.log("B");
}

let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Username is empty");
}

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(null));
console.log(Boolean(undefined));