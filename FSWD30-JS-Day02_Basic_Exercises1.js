/*Basic 1 | Crystal Gazer

Write a function named crystalGazer() that takes four arguments, number of children, partner's name, 
geographic location and job title. Once the user pass the four arguments the program should output 
message on screen as follows:

You will be a job_title in location and married to partner's_name with number_children.*/

function crystalGazer(children, partner, location, job) {
	return(" Crystal Gazer" + "<br>" + "<br>" + "You will be an " + job + " in " + location + " and married to " + partner + " with " + children + " children.");
}

document.getElementById("BE01").innerHTML = crystalGazer(3, "Louise", "Salzburg", "accountant");





