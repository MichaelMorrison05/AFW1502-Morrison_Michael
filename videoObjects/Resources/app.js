
//Literal Notation
var obj = {
	"property_name" : "property_value",
	"property_name2" : "property_value2",
	"property_name3" : "property_value3"
};


//Dot Notation
var obj = new Object();
	obj.property_name = "property_value";
	obj.property_name2 = "property_value2";
	obj.property_name3 = "property_value3";
	obj.method = function(){
		console.log(this.property_name);
	};


console.log(obj.property_name);

obj.method();


var rectangle = new Object();
	rectangle.height = 6;
	rectangle.width = 4;
	rectangle.area = function(){
		console.log(this.height * this.width);
	};








