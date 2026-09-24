//finding max number from the array

const num_array = [1, 2, 3, 4, 5, 6, 7, 8];

function max_num(num_array){

		let max = num_array[0];
		
		for(let n=0;n<num_array.length;n++){
		
			if(num_array[n]> max){
			
				max=num_array[n];
			
			}
			else{
				
				num_array[n]=max;
			
			}
			
		
			
		}
    return max;
}

console.log(max_num(num_array));