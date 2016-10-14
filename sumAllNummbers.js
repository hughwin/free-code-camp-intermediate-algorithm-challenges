// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.


function sumAll(arr) {
  var max = (Math.max(arr[0],arr[1])); 
  var min = (Math.min(arr[0],arr[1])); 
  var total = min;
  min += 1
console.log(max, min);
for (min; min <= max; min++) {
	console.log(min)
	total += min
	console.log(total)

}
return(total)
}


sumAll([5, 10]);