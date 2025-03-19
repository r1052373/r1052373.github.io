const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	let submit = document.getElementById("submit");
	let close = document.getElementsByClassName("close");
	for (let i = 0; i < close.length; i++) {
		close[i].addEventListener("click", function (e) {
			e.target.parentElement.remove();
		});
	}
	submit.addEventListener("click", (e) => {
		e.preventDefault();
		save()
	})
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
const save = () => {
	let colorDemos = document.getElementsByClassName("colorDemo")[0];
	let colors = document.getElementById("colors");
	let clone = colorDemos.cloneNode(true);

	let closeButton = clone.children[0];
	closeButton.classList.add("close");
	closeButton.classList.remove("invisible");
	closeButton.addEventListener("click", function () {
		clone.remove();
	});

	colors.appendChild(clone);
};
window.addEventListener("load", setup);