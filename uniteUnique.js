function uniteUnique() {
	var arr = Array.from(arguments);
	console.log(arr);
var flattened = arr.reduce(function(a, b) {
  return a.concat(b);
}, []);
console.log(flattened);
uniqueArray = flattened.filter(function(item, pos) {
    return flattened.indexOf(item) == pos;
});
console.log(uniqueArray);







  return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
