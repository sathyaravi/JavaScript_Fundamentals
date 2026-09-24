//sum of elements in the array

//arrow function +array

const getSum=(numbers)=>{

	let sum=0;
    for(let i=0;i<numbers.length;i++){
	
		sum+=numbers[i];
		
	}
	
	return sum;

}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(getSum(numbers));
