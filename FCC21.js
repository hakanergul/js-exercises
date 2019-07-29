function rot13(str) { // LBH QVQ VG!
  
  return str.split('').map( x => x.match(/\w/g)?String.fromCharCode((x.charCodeAt(0)+13 > 90 )? (65+x.charCodeAt(0)+13-90-1):(x.charCodeAt(0)+13)) :x ).join('');
}

// Change the inputs below to test
console.debug(rot13("SERR PBQR PNZC"));