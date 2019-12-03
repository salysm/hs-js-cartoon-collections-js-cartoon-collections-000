function dwarfRollCall(dwarves) {
	var newStr = "";
	for(var i = 0; i < dwarves.length; i++) {
		if(i === dwarves.length+1) {
			newStr += (i+1 + ". " + dwarves[i]);
		}else {
			newStr += (i+1 + ". " + dwarves[i] + " ");
		}
	}
	return newStr;
}
function summonCaptainPlanet(array) {
	return array.map(function(ele) {
		return ele.toUpperCase() + "!";
	});

}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese(foods) { // [ "grapes", "apples", "gouda", "cheddar"]
	var cheese = ['camembert', 'cheddar', 'gouda'];
	for(var i = 0; i < foods.length; i++) {
	  // i = 4
	  // foods[i] => "gouda"
		var cheeseIdx = cheese.indexOf(foods[i]);
		if(cheeseIdx !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";
}

// words =  [ "apples", "truck", "boat", "bananna"] => [ "boat", "bananna"]
function wordsWithB(words) {
  var bWords = [];
  for(var i = 0; i < words.length; i++) {
    if(words[i].startsWith('b')){
      bWords.push(words[i])
    } 
  }
  return bWords
}
