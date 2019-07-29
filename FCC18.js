function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr = arr.map( obj => {
  	obj.orbitalPeriod = Math.round((2*Math.PI*Math.sqrt(Math.pow((obj.avgAlt+earthRadius),3) / GM)));
  	delete obj.avgAlt;
  	return obj;
});
  return arr;

}

console.debug(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));