/*Basic 3 | Age Calculator-improved

Enhance your previous exercise in terms of how to get the current year in JavaScript instead of passing it in. So provide the same results just through passing one argument.

You should provide the following results:

You are either 29 or 28
*/

function myFunction() {
    var d = new Date();
    var n = d.getFullYear();
    var text = "Age Calculator - improved <br><br>This year is " + n +'.';
    document.getElementById("BE03").innerHTML = text;
var birth = prompt("Please enter your year of birth");
var birthNum = Number(birth);

document.getElementById("BE031").innerHTML = ("You were born in " + birthNum);

var age = function() {
		return (n - birthNum);
	}
age();

var age1 =  function() {
		return (n - birthNum - 1);
	}

age1();

document.getElementById("BE032").innerHTML = ("This year you are " + age() + " or " + age1() + " years old.");
}

myFunction();








/*  


	var age = function() {
		return this.year - this.birth;
	}

	age1:  function() {
		return this.year - this.birth + 1;
	}
}
*/
