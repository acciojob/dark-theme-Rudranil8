let x=document.querySelector("#ptag");
x.style.color="blue";
let appDiv = document.getElementById("app");
let swapButton = document.getElementById("swap");
function swapTheme(){
	appDiv.classList.toggle("night");
	swapButton.classList.toggle("button_night");
}
swapButton.onclick = swapTheme;