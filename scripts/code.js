const setup = () => {
    let button = document.getElementById("Btn1");
    let button2 = document.getElementById("Btn2");
    let sem1 = document.getElementById("Sem1");
    let sem2 = document.getElementById("Sem2");

    button.addEventListener("click", (e) => {
        let i = 0;
        setInterval(() => {
            if (i < sem1.children.length) {
                sem1.children[i].classList.toggle("invisible");
                i++;
            }
        }, 100);
    });
    button2.addEventListener("click", (e) => {
        let i = 0;
        setInterval(() => {
            if (i < sem2.children.length) {
                sem2.children[i].classList.toggle("invisible");
                i++;
            }
        }, 100);
    });
}

window.addEventListener("load", setup);
