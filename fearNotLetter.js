function fearNotLetter(str) {
	var i = 0;
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var n = alphabet.indexOf(str[0]);
	console.log(n);
	for (var n; n <= str.length; n++){
		console.log(str[i] + alphabet[n])
		if (str[i] !== alphabet[n]){
			return alphabet[n];
			
	
		}
		i+=1;
	}
  return undefined;
}

fearNotLetter("abce");