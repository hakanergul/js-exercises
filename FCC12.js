function dropElements(arr, func) {
  // Drop them elements.
  let i = 0;
  while(i < arr.length){
  	if(func(arr[i])){
  		return arr.slice(i);
  	}
  	i++;
  }
  return [];
}

console.debug(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));