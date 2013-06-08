function ArrayExtensions(){}

Array.prototype.contains = function(value, byValueAndType){
	var compare = Array.prototype.__comparitor(byValueAndType);
	for(var i=0; i < this.length; i++){
		if(compare(this[i], value)){
			return true;
		}
	}
	return false;
};

Array.prototype.distinct = function(byValueAndType){
	var compare = Array.prototype.__comparitor(byValueAndType);
	var results = [];
	for(var i=0; i < this.length; i++){
		var alreadyExists = false;
		for(var x=0; x < results.length; x++){
			if(compare(this[i], results[x])){
				alreadyExists = true;
			}
		}
		if(!alreadyExists)
			results.push(this[i]);
	}
	return results;
};

Array.prototype.__comparitor = function(valueAndType){
	if(valueAndType){
		return function(x, y){
			return x === y;
		};
	}else{
		return function(x, y){
			return x == y;
		};
	}
};