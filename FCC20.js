function convertToRoman(num) {
  const beslikler = ['V', 'L', 'D'];
  const onluklar = ['I', 'X', 'C', 'M'];
  const numb = String(num).split('').reverse().map(x=>Number(x));
  let romanResult = [];
  for(let i=0; i < String(numb).length; i++ ){
    if(numb[i] === 0) continue;
    if(numb[i] === 5) {
    	romanResult[i] = ''.concat(beslikler[i]);
    } else if(numb[i] === 4) {
        romanResult[i] = onluklar[i].concat(beslikler[i]);
        console.log(romanResult);
    } else if(numb[i]===9){
  	    romanResult[i] = onluklar[i].concat(onluklar[i+1]);
        console.log(romanResult);
    } else if(numb[i]<4){
    	romanResult[i]='';
        for(let j=0;j<numb[i];j++){
        	romanResult[i]=romanResult[i].concat(onluklar[i]);
        }
    }else if (numb[i]>4){
    	romanResult[i] = beslikler[i];
    	for(let k=0;k<numb[i]-5;k++){
        	romanResult[i]=romanResult[i].concat(onluklar[i]);
        }
    }

  }
  return romanResult.reverse().join('');
}

console.debug(convertToRoman(87));