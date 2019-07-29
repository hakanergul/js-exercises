function uniteUnique(...arr) {
  let total = [];
  for(let subArr of arr){
  	console.debug(subArr);
  	total.push(...subArr);
  }
  console.debug([...new Set(total)]);
  return [...new Set(total)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);