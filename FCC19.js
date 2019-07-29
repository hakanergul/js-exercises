function palindrome(str) {
  // Good luck!
  let iterationCount;
  str = str.match(/\w/g).map( x => x.toLowerCase() ).filter(x => x!=='_');
  iterationCount = (str.length % 2 === 0) ? (str.length / 2):((str.length - 1)/ 2) ;
  for (let i = 0; i < iterationCount; i++) {
  	console.debug(str[i]);
  	if(str[i]!==str[str.length-1-i]) return false;
  }
  console.log(str);
  return true;
}

console.debug(palindrome("_eye"));
console.debug(palindrome("A man, a plan, a canal. Panama"));
