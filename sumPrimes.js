function sumPrimes(num) {
	prime = 0
	
function primeNumberTest(value) {
	for (var i = 2; i < value; i++){
		if (value%i === 0){
			return false
		}
	}
  return true;
}



for (var j = 2; j <= num; j++){
if (primeNumberTest(j) === true){
	console.log(j + " is a prime number.")
	prime += j

}

}
return prime
}

sumPrimes(977);

// A function inside a function