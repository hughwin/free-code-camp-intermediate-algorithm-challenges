function whatIsInAName(collection, source) {
  // Where takes larger input collection and compares it with the selection in source.
  var arr = collection.filter(function(item){
    // We use filter to return true values. 
    for (var i in source) {
      // Check values in source, and return the item if it does exist in source. 
      if (source[i] != item[i]){
        return false;
      }
    }
    return true;
  });
  // Only change code below this line
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
