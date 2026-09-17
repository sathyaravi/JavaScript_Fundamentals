const users = [
    {

    username:"admin",
    role:"admin"
    },
    {
        username:"manager",
        role:"manager"
    },
    {
        username:"tester",
        role:"tester"
    }
];


console.log(users[0]);

console.log(users[1].role);

console.log(users[2].username);

const admin = users.find(user=>user.role==="tester");

console.log(admin.username);

console.log(admin.role);

const usernames=users.map(user=>user.username);

console.log(usernames);

const nonAdmins = users.filter(user => user.role !== "admin");
console.log(JSON.stringify(nonAdmins, null, 2));

//some() - returns true if any one item matches in an array

const numbers=[1,3,4,5,7];

console.log(numbers.some(number=>number%2===0));

//every() - returns true only if all the items matches in an array

const arr=[5,10,15];

console.log(arr.every(num=>num%5===0));

