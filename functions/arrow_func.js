function greetings(name){

    return "Welcome "+name;
}

console.log(greetings("John"));


//converting the above function to arrow function

const greet = (val) => {
    return "Welcome " + val;
};

let val="Jane";
console.log(greet(val));


const greet_func=(fname)=>{
    return "Hello "+fname;
}

let fname="Sam";
console.log(greet_func(fname));

//arrrow function with 2 parameters

const two_sum=(a,b)=>{
    return a+b;
}

console.log(two_sum(10,20));


//arrow function + condition

const isEven=(num)=>{
    if(num%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(10));
console.log(isEven(7));

//arrow function +array

const getEvennumbers=(numbers)=>{
    return numbers.filter(evenNumber=>evenNumber%2==0);

}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(getEvennumbers(numbers));

//arrow functions+map
    
const doubleNumbers=(numbers)=>{

    return numbers.map(number=>number*2);
}

console.log(doubleNumbers(numbers));


//arrow func+filter+map

const getevenDoubledNumbers=(numbers)=>{

    return numbers.filter(number=>number%2===0).map(number=>number*2);
}

console.log(getevenDoubledNumbers(numbers));

function processUser(name, callback) {
    console.log("User: " + name);
    callback();
}

processUser("Sathya", () => {
    console.log("Login successful");
});

function loginUser(username, callback) {
    console.log("Logging in: " + username);
    
    // imagine login happens here
    
    callback();
}

loginUser("Sathya",()=>{
    console.log("Login Successful");
});


function transformNumbers(num_arr){
    return num_arr.map(num=>num*3);
}

console.log(transformNumbers([1, 2, 3, 4]));


function getAdults(ages){

    return ages.filter(age=>age>=18);
}

console.log(getAdults([12, 18, 25, 16, 30]));


const users = [
    { name: "Alex", age: 25 },
    { name: "Ben", age: 17 },
    { name: "Chris", age: 30 },
    { name: "David", age: 15 }
];

function getAdultNames(users){

    return users.filter(user=>user.age>=18).map(user=>user.name);
}

console.log(getAdultNames(users));