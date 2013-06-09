function JINQ_Support(){

	// Distinct
	var items = [1, 2, 3, "1", "2", 3];
	var distinct1 = items.distinct();
	var distinct2 = items.distinct(false);
	var distinct3 =  items.distinct(true);
	$(".distinct1").text("result: " + JSON.stringify(distinct1));  
	$(".distinct2").text("result: " + JSON.stringify(distinct2));  
	$(".distinct3").text("result: " + JSON.stringify(distinct3));

	
	//Contains
	var items = [1, 2, "3"];
	var contains1 = items.contains("3");
	var contains2 = items.contains(3);
	var contains3 = items.contains(3, true);
	$(".contains1").text("result: " + JSON.stringify(contains1));  
	$(".contains2").text("result: " + JSON.stringify(contains2));  
	$(".contains3").text("result: " + JSON.stringify(contains3));  

	//first
	var items = [null, 1, 2, "3"];
	var first1 = items.first();
	var first2 = items.first(true);
	$(".first1").text("result: " + JSON.stringify(first1));  
	$(".first2").text("result: " + JSON.stringify(first2));  
	
	//last
	var items = [1, 2, "3", null];
	var last1 = items.last();
	var last2 = items.last(true);
	$(".last1").text("result: " + JSON.stringify(last1));  
	$(".last2").text("result: " + JSON.stringify(last2));  
	
	//allByType
	var items = [1, 2, "3", "a", "b", {c:1}, 0xF6];
	var allByType1 = items.allByType("string");
	var allByType2 = items.allByType("number");
	var allByType3 = items.allByType("object");
	$(".allByType1").text("result: " + JSON.stringify(allByType1));  
	$(".allByType2").text("result: " + JSON.stringify(allByType2));  
	$(".allByType3").text("result: " + JSON.stringify(allByType3));  
	
};  