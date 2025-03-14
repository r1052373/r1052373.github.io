let img;
let toggle;
const setup = () => {
    let img = document.getElementById('imgPhoto');
    let changeImage = () => {
        toggle = !toggle;
        if (toggle) {
            img.src = "images/foto.png";
        } else {
            img.src = "images/vives.png";
        }


    }
    img.addEventListener('mouseover', changeImage)
}


window.addEventListener("load", setup);