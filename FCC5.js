function pairElement(str) {
  const dnaStrand = str.split('');
  const dnaPair = ['A', 'G', 'T', 'C']; // element index + 2 mod4 equal pairs
  let resultArr = [];
  for(let x of dnaStrand){
  	resultArr.push([x, dnaPair[(dnaPair.indexOf(x) + 2) % 4]]);
  }

  return resultArr;
}

pairElement("GCG");