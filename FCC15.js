function truthCheck(collection, pre) {
  // Is everyone being true?
  for (let obj of collection){
  	if(!obj[pre]) return false;
  }
  return true;
}

console.debug(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));