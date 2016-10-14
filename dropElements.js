function dropElements(arr, func) {
discards = []
while (func(discards.length) === false){
	discards = arr.splice(0, 1)
	console.log(arr)
	
}
return arr
}

dropElements([1, 2, 3], function(n) {return n < 3; });
