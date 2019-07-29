function convertHTML(str) {
  // &colon;&rpar;
  const htmlCorresp = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};

  return str.split('').map( x => ( htmlCorresp.hasOwnProperty(x) ? htmlCorresp[x]: x)).join('');

}

convertHTML("Dolce & Gabbana");