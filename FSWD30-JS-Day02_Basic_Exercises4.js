/* Basic 4 | Degree-Radian Conversion

Create a JavaScript function that converts degrees to radians. The function accepts 
one argument, the degrees, and output the radians based on them. The formula for 
converting degrees to radians is "degrees * (pi/180)"

Ex. If user pass 90 degrees it should get the result of 1.57079 radians*/

function degreeRadian (a) {
	return a *(Math.PI/180)
}

degreeRadian(90);

document.getElementById("BE04").innerHTML = "Degree-Radian Conversion" + "<br>" + "<br>" + "Result: " + degreeRadian(90);
