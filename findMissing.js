// comparing two arrays and finding different element

function findMissing(array1, array2){
	if(array1.length > array2.length) return array1.filter( x => !array2.includes(x) );
	return findMissing(array2, array1);
}
