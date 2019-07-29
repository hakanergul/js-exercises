function telephoneCheck(str) {
  // Good luck!
  return /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/g.test(str);
}

telephoneCheck("555-555-5555");