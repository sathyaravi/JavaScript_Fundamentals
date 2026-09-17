const testUsers = [
    { username: "admin", role: "admin", active: true },
    { username: "sathya", role: "tester", active: true },
    { username: "john", role: "manager", active: false },
    { username: "mary", role: "tester", active: true }
];

//find the user whose name is sathya

console.log(testUsers.find(user=>user.username==="sathya"));

//get all active users

console.log(testUsers.filter(user=>user.active===true).map(user=>user.username));

//get all testers

console.log(testUsers.filter(user=>user.role==="tester").map(user=>user.username));

//get an array only containing usernames

console.log(testUsers.map(user=>user.username));

//check whether every user is active

console.log(testUsers.every(user=>user.active===true));