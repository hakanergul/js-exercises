function sumPrimes(num) {
	let primeArr = [2],
			i = 2;
	while(i <= num){
		if(primeArr.every( x => ( i % x !== 0))){ //if previous elements are not divide i, then push i primeArr
			primeArr.push(i);
		}
		i++;
	}
  return primeArr.reduce( (acc, val) => (acc + val));
}

sumPrimes(20);