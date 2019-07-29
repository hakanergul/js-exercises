

function steamrollArray(arr) {
  // I'm a steamroller, baby
  let resultArr = [];
  rollArray(arr);

  function rollArray(rArr){
		for(let el of rArr){
			if(!Array.isArray(el)){
				resultArr.push(el);
			} else {
				rollArray(el);
			}
		}
	}

 	return resultArr;
 }




console.debug(steamrollArray([1, {}, [3, [[4]]]]));