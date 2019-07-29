function sumFibs(num) {
  let fibArr = [1];
  let i = 0;
 	while(fibArr[i]<= num){
 		if( i === 0) {
 			fibArr.push(1);
 		} else {
 			fibArr.push(fibArr[i-1] + fibArr[i]);
 			if (fibArr[i+1] > num) fibArr.pop();
 		}
 		i++;
 	}

 	return fibArr.filter( x => (x%2 === 1)).reduce( (acc, val) => (acc + val));

}

sumFibs(56);