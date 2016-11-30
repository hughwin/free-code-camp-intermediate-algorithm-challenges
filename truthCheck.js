function truthCheck(collection, pre) {
	for (var i = 0; i < collection.length; i++){
		if (collection[i][(pre)] === false || collection[i][(pre)] === 0 || collection[i][(pre)] === "" || collection[i][(pre)] === null || collection[i][(pre)] === undefined || Number.isNaN(collection[i][(pre)] )=== true){
			return false;
		}
	}
	return true;
}
truthCheck([{"single": "double"}, {"single": NaN}], "single")

