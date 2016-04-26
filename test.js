var storeUsersInfo = [];
var amountOfUsers = prompt("How many users do you want?");
amountOfUsers = parseInt(amountOfUsers);
function returnUserInput() {
 	var askFirstName = prompt("What is your first name?");
	var askLastName = prompt("What is your last name" + " " + titleCase(askFirstName) + "?");
	var askAge = prompt("How old are you" + " " + titleCase(askFirstName) + " " + titleCase(askLastName) + "?");

	return {
		firstName: titleCase(askFirstName),
		lastName: titleCase(askLastName),
		age: askAge
	};
};
function titleCase(string) {
	return string.charAt(0).toUpperCase() + string.slice(1); 
};

for(var i = 0; i < amountOfUsers; i++) {
	storeUsersInfo[i] = returnUserInput();
}
console.log(storeUsersInfo);