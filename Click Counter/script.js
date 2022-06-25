const clickPage = document.getElementById("click-page");
const waitingPage = document.getElementById("waiting-page");
const timePage = document.getElementById("time-page");

setTimeout( () => {
	waitingPage.style.display = "none";
	clickPage.style.display = "inline";

}, 2000)


var timer = setInterval(counter, 10);
var start = 0;

function counter() {
	++start;


	clickPage.onclick = function() {
		clickPage.style.display = "none";
		timePage.style.display = "inline";
		timePage.textContent = "Your time is: " + start + "ms";
		console.log(start);
	}

}

timePage.onclick = function() {
	location.reload();
}