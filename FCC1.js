function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = collection.filter( obj => {
    for(let key in source){
      if(!obj.hasOwnProperty(key)) return false;
      if(obj[key] !== source[key]) return false;
    }
    return true;
  });
  
  // Only change code above this line
  return arr;
}

console.debug(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));