const user = {
    name: "Sathya",
    role: "QA Engineer",
    experience: 5
};

console.log(user.name);
console.log(user.role);

user.role="SDET";

console.log(user.role);

user.location="Oregon";

console.log(user);

//object+function

const user1 = {
    name: "Alex",
    role: "Tester",
    experience: 4
};

function getUserInfo(user1){

    return `${user1.name}  is a ${user1.role} with ${user1.experience} years of experience`;
}

console.log(getUserInfo(user1));

const user2 = {
    name: "John",
    role: "Tester",
    experience: 5
};

const {name,role,experience}=user2;

console.log(name);
console.log(role);
console.log(experience);

function getUserInformation({name,role,experience}){

    return `${name}  is a ${role} with ${experience} years of experience`;
}

console.log(getUserInformation(user2));

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);