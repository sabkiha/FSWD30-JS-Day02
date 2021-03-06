/* Basic 5 | Area and Volume of a box

Create a function that calculates the area and volume of a box.

Formulas: area multiples width and height, the volume multiples width, height and depth

The user can pass three different numbers as arguments an get calculated sizes. The results should be 
outputted using the return statement, instead of document.write() or console.log() methods

You should provide the following results:

The area of the box is: 14
The volume of the box is: 70
*/

function area (width, height) {
	return width * height;
}

area(2, 7)

function volume (width, height, depth) {
	return width * height * depth;
}

volume(2, 7, 5)

document.getElementById("BE05").innerHTML = "Area and Volume of a box" + "<br>" + "<br>" + "Area: " + area(2, 7) + "<br>" + "<br>" + "Volume: " + volume(2, 7, 5) ;
