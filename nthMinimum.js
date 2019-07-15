/*
Finding nth minimum number in an array.
Written 
*/

function nthMin(arr, n){
	let min = arr[0];
	for(let i=0; i < arr.length; i++){
		if(arr[i] < min){
        	min = arr[i];
		}
  }
	n--;
	return n===0?min:nthMin( arr.filter( x => x !== min), n);   // this process run until n = 0. if n = 0, function will return nth minimum number
}
