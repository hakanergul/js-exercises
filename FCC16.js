function addTogether(args) {
	console.log(arguments);
	if(Object.entries(arguments).some(x => (typeof x[1] !== 'number'))) return undefined;
	if (arguments.length > 1) {
		return Object.entries(arguments).map( x => x[1]).reduce( (acc, val) => acc +val );
	} 

  return (y => ((typeof y === 'number')?(args + y):undefined));
}

console.debug(addTogether(2,3));