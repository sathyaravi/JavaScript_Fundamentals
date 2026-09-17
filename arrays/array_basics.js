const browsers=["Chrome","Firefox","Safari"];
console.log(browsers[1]);
for(let i=0;i<browsers.length;i++){
    console.log(browsers[i]);
}

console.log("Add and remove elements from the array");

//Add elements to the array

browsers.push("Edge");//add this element at the end of an array



browsers.unshift("safari");//add this element at the beginning of an array

browsers.pop();//removes an element from the end of an array

for(const browser of browsers){

    console.log(browser);
}

console.log("Before remove element using shift")

browsers.shift();//removes an element from the begining of the array

browsers.forEach(browser => {
    console.log(browser)
});

console.log("Array example 2");
const products=["Apple","Banana","Orange"];

for(const product of products){

    console.log(product);
}

//map - transforms every item

const numbers=[1,2,3,4,5];

const doubled = numbers.map(number=>number*2);

console.log(doubled);

//filter - keeps an item that satisifes a  given condition


const evenNumber=[10,20,30,40,50,75];

const divbyten=evenNumber.filter(evenNumber=>evenNumber%2==0);

console.log(divbyten);

//find() - used to find the first matching item in the list

const num=[5,10,15,20];

const result=num.find(num=>num>10);

console.log(result);