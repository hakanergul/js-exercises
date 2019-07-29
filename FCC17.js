var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstAndLastName = firstAndLast;

  this.setFirstName = (first) => firstAndLastName = first + " " + firstAndLast.split(" ")[1];
  
  this.setLastName = (last) => firstAndLastName = firstAndLast.split(" ")[0] + " " + last;
  this.setFullName = (x) => firstAndLastName = x;
  
  this.getFirstName = () => firstAndLastName.split(" ")[0];
  this.getLastName = () => firstAndLastName.split(" ")[1];
  
  this.getFullName = function() {
    return firstAndLastName;
  };
  
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();