/* Olivia Ng
Comp20: Web Programming
Homework 4: JavaScript Practice
October 6, 2019 */

/* helper function which gets a random number between 1 and 48 */
function getRandom() {
	num = Math.floor(Math.random() * 49) + 1;
	return num;
}
/* finds the lucky ball */
function getLuckyBall() {
	lucky = Math.floor(Math.random() * 19) + 1;
	return lucky;
}
/* Gets five random numbers between 1 and 48 and places everything
in an array, putting the lucky ball in index 0 */
function get5() {
	var i;
	var num_array = [];
	num_array[0] = getLuckyBall();
	for (i = 1; i < 6; i++) {
		var random = getRandom();
		num_array[i] = random;
	}
	return num_array;
}
/* prints array and then sorts array and prints again */
function displayNums() {
	var sort_array = [];
	var array = get5();
	console.log(array + "<br>");
	var lucky_num = array[0];
	for (i = 0; i < 5; i++) {
		sort_array[i] = array[i + 1];
	}
	sort_array = sort_array.sort((a, b) => a - b);
	var new_array = [];
	new_array[0] = lucky_num;
	for (i = 1; i < 6; i++) {
		new_array[i] = sort_array[i - 1];
	}
	console.log(new_array);
	return new_array;
}
/* retrieves the input from */
function getInput() {
	var input = document.getElementById("numbers").value;
	var lucky = getLuckyInput();
	var array = input.split(" ");
	var sort_array = array.sort((a, b) => a - b);
	var input_array = [];
	input_array[0] = lucky;
	for (i = 1; i < 6; i++) {
		input_array[i] = sort_array[i - 1];
	}
	return input_array;
}
/* gets the lucky ball user input */
function getLuckyInput() {
	var lucky = document.getElementById("luckyball").value;
	return lucky;
}
/* calculates the payout based on the randomly generated array of 
numbers and the user's input*/
function matchWinnings() {
	console.log
	var num_array = getInput();
	var random_array = displayNums();
	random_lucky = random_array[0];
	var new_random_arr = [];
	for (i = 1; i < 6; i++) {
		new_random_arr[i - 1] = random_array[i];
	}
	lucky_num = num_array[0];
	var match_array = [];
	for (i = 1; i < 6; i++) {
		match_array[i - 1] = num_array[i];
	}
	var count = 0;
	for (i = 0; i < 5; i++) {
		for (j = 0; j < 5; j++) {
			if (new_random_arr[i] == match_array[j])
				count++; 
		}
	}
	if (random_lucky == lucky_num) {
		var lucky_true = 1;
	}
	else {
		var lucky_true = 0
	}
	if (lucky_true == 1 && count == 0)
		alert("You guessed zero of the numbers but you got the lucky ball! You win $4.");
	else if (lucky_true == 1 && count == 1) 
		alert("You guessed one of the numbers and you got the lucky ball! You win $6.");
	else if (lucky_true == 0 && count == 2)
		alert("You guessed two of the numbers and you didn't get the lucky ball! You win $3.");
	else if (lucky_true == 1 && count == 2)
		alert("You guessed two of the numbers and you got the lucky ball! You win $25.");
	else if (lucky_true == 0 && count == 3) 
		alert("You guessed three of the numbers and you didn't get the lucky ball! You win $20.");
	else if (lucky_true == 1 && count == 3)
		alert("You guessed three of the numbers and you got the lucky ball! You win $150.");
	else if (lucky_true == 0 && count == 4) 
		alert("You guessed four of the numbers and you didn't get the lucky ball! You win $200.");
	else if (lucky_true == 1 && count == 4)
		alert("You guessed four of the numbers and you got the lucky ball! You win $20.");
	else if (lucky_true == 0 && count == 5)
		alert("You guessed five of the numbers and you didn't get the lucky ball! You win $25,000 a YEAR for LIFE.");
	else if (lucky_true == 1 && count == 5)
		alert("WOW!! You guessed five of the numbers and you got the lucky ball! You win $7,000 a WEEK for LIFE.");
	else
		alert("You guessed no numbers correctly. Please enter the lottery again. :(")
}
















