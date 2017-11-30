/* Basic 2 | Age Calculator

Write a function called ageCalculator() that takes two arguments birth year 
and current year. Calculate 2 possible ages based on those years 
(two, because we don't know the birth month).

You should provide the following results:

You are either 29 or 28
*/

function ageCalculator(birthYear, currentYear) {
	return currentYear - birthYear;
}

function ageCalculator2(birthYear, currentYear) {
	return currentYear - birthYear + 1;
}


document.getElementById("BE02").innerHTML = ("Age Calculator" + "<br>" + "<br>" + "You are either " + ageCalculator(1973, 2017) + " or " + ageCalculator2(1973, 2017) + " this year.");
