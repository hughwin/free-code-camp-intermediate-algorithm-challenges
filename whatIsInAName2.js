function whatIsInAName(collection, source) {

var arr =[];
var result =undefined;


var keys = Object.keys(source);
console.log(keys.length);
function check(item){
	
	for (var i = 0; i < keys.length; i++){
	
	if (item.hasOwnProperty(keys[i]) && item[keys[i]] == source[keys[i]]){
		result = true;
	}
	else result = false;
	}
	return result;
}
arr = collection.filter(check);
return arr;
  
  
  // Only change code above this line

}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })