
//with parameters
function add(a,b){

    return a+b;
}

let result = add(10,20);

console.log(result);

//without args
function sub(){
    let a=20,b=10;
    return a-b;
}

console.log(sub());

//Write a function that checks whether a number is even.

function even_num(a){

    if(a%2==0){
        return "even";
    }

    else{
        return "odd";
    }
}

console.log(even_num(5));

//Write a function that returns the largest of two numbers.

function max(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

let max_num=max(1,6);

console.log(max_num);

console.log(max(10,15));

//Write a function that accepts an array and returns its length.

function arr_len(arr){

    return arr.length;
}

let arr=[1,2,3,5,7,11,15];

console.log(arr_len(arr));

//Write a function that accepts a username and returns "Welcome <username>".


function greetings(name){

    return "Welcome "+name;
}

console.log(greetings("John"));


//Write a function that accepts an array and returns only numbers greater than 10.

function arr_max(arr){

    for(let i=0;i<arr.length;i++){

        if(arr[i]>10){
            console.log(arr[i]);
        }
        
    }
}

const num_arr=[1,20,32,7,5];

arr_max(num_arr);

