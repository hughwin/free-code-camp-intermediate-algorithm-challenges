/* Compare two arrays and return a new array with any items only found in one of the two given
 arrays, but not both. In other words, return the symmetric difference of the two arrays. */

 function diffArray(arr1, arr2) {
	 var newArr= [];
	 var checker = [];
	 // Make the array into one big array
  var joinedArray = arr1.concat(arr2);
  for (var i = 0; i < joinedArray.length; i++) {
	  var array = joinedArray.indexOf(joinedArray[i]);
	  console.log(array); 
	  checker.push(array)
	  console.log(checker)
  }
  // Same, same; but different.
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
