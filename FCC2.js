function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let strArr = [];
  str = str.replace(/\s|_|<\w+>/g, '-');
  console.debug(str);
  strArr = str.split('');
  for (let harf of strArr) {
  	if(harf.match(/[A-Z]/) && str.indexOf(harf) !== 0){
  		console.debug(harf);
  		strArr = strArr.slice(0, strArr.indexOf(harf)).concat('-').concat(strArr.slice(strArr.indexOf(harf)));
  		strArr[strArr.indexOf(harf)] = harf.toLowerCase();
  	}
  }

  return strArr.join('').replace(/-{2,}/g, '-').toLowerCase();
}

console.debug(spinalCase('AllThe-small Things'));