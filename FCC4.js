function myReplace(str, before, after) {
  if(before[0].match(/[A-Z]/)) return str.replace(before, after[0].toUpperCase()+after.split('').slice(1).join(''));
  return str.replace(before, after);
}

console.debug(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));