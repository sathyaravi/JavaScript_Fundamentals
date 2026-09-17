const users = [
    { username: "admin", role: "admin" },
    { username: "sathya", role: "tester" },
    { username: "john", role: "manager" }
];

const newusers=users.filter(user=>user.role!="tester");

console.log(JSON.stringify(newusers, null, 2));