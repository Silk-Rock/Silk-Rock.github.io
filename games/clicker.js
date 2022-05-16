var clicks = 0;
checkCookie();
// var messages = new Array();
var messages;//  = fetch('./clicker.json');

fetch("./clicker.json").then(response => {
	messages = response.json();
});

messages[96] = "Up and down and all around"; // Fish-eye filter
for (var i = 0; i < 15; i++) {
	messages[96] += " and up and down and all around";
}

renderClicks();

function doClick() {
	clicks += 1;
	renderClicks();
	d = new Date();
	d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = "clicks=" + clicks + ";" + expires + ";";
}

function renderClicks() {
	document.getElementById("button").innerHTML = "<p>" + clicks + "</p>";
	if (messages[clicks]) {
		document.getElementById("button").innerHTML += "<p>" + messages[clicks] + "</p>";
	}
	else {
		document.getElementById("button").innerHTML += "...";
	}

	if (clicks >= 671) {
		document.getElementById("button").style.color = "black";
		document.getElementById("button").style.backgroundColor = "#ddd";
	}
	else if (clicks >= 666) {
		document.getElementById("button").style.color = "red";
		document.getElementById("button").style.backgroundColor = "black";
	}
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return 0;
}

function checkCookie() {
	let cookieValue = getCookie("clicks");
	if (cookieValue != "") {
		clicks = Number(cookieValue);
	} else {
		clicks = 0;
	}
}