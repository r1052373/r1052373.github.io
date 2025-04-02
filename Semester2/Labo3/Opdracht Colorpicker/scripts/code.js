const setup = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");

	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);
	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);
}

const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let r = document.getElementById("red");
	let g = document.getElementById("green");
	let b = document.getElementById("blue");
	colorDemos[0].style.backgroundColor =  "rgb(" + sliders[0].value + "," + sliders[1].value+ "," + sliders[2].value + ")";
	r.innerText = sliders[0].value;
	g.innerText = sliders[1].value;
	b.innerText = sliders[2].value;

}

window.addEventListener("load", setup);