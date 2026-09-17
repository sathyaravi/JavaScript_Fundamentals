//find

const users = [
    { username: "admin", role: "admin" },
    { username: "sathya", role: "tester" },
    { username: "john", role: "manager" }
];

const trole=users.find(user=>user.role==="tester");

console.log(trole.username);