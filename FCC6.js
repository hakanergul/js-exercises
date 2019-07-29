function fearNotLetter(str) {
  let firstLetterCharCode = str.charCodeAt(0);
  for(let i = firstLetterCharCode, j = 0; i < str.length, j<str.length; j++, i++){
  	if(str[j] !== String.fromCharCode(i) ) {
  		console.debug(String.fromCharCode(i));
  		return String.fromCharCode(i);
  	}
  }
  return undefined;
}

console.debug(fearNotLetter("abce"));