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

Array.prototype.first = function(ignoreNullOrDefined){
	if(!ignoreNullOrDefined){
		return this[0];
	}

	for(var i=0; i< this.length; i++){
		if(this[i] !== null && this[i] !== undefined){
			return this[i];
		}
	}
};

Array.prototype.last = function(ignoreNullOrDefined){
	var temp = this.reverse();
	if(!ignoreNullOrDefined){
		return temp[0];
	}
	for(var i=0; i< this.length; i++){
		if(temp[i] !== null && temp[i] !== undefined){
			return temp[i];
		}
	}
};

Array.prototype.allByType = function(typeName){
	var results = [];
	for(var i=0; i < this.length; i++){
		if(typeof this[i] == typeName){
			results.push(this[i]);
		}
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