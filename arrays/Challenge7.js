const users = [
    { username: "admin", role: "admin" },
    { username: "sathya", role: "tester" },
    { username: "john", role: "manager" }
];

const userlist=users.map(user=>user.username);

console.log(userlist);