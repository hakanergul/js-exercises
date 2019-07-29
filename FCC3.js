function translatePigLatin(str) {
  if(str.indexOf(str.match(/[aeiou]/)) === 0) return str + 'way';
  if(!str.match(/[aeoui]/gi)) return str +'ay';
  return str.slice(str.indexOf(str.match(/[aeiou]/))) +
   str.slice(0, str.indexOf(str.match(/[aeiou]/))) + 'ay';
 }

translatePigLatin("consonant");