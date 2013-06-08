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

};  