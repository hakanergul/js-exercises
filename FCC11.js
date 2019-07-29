function smallestCommons(arr) {
	let nArr=[],
			iterationNo = 0,
			gcd = 1,
			divisor = 2;
	for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
		nArr.push(i);
	}

	while(!nArr.every( x => x === 1) ){

		while( nArr.some( x => (x % divisor === 0) ) ){
			gcd *= divisor;
			nArr = nArr.map(function(a){
				if(a % divisor === 0){
					return a / divisor;
				} else {
					return a;
				}
			});
			iterationNo++;
				console.debug(nArr, gcd);

		}

		divisor++;
	}
	console.debug(iterationNo +" iterations");
  return gcd;
}



smallestCommons([1,13]);