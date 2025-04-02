
let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {

    let img = document.getElementById('img');
    let btn = document.getElementById('btn');
    img.addEventListener('click', () => {
        clickImage(img, btn);
    })
    btn.addEventListener('click', () => {
        btn.style.display = 'none';
        global.timeoutId = setInterval(changeImage, global.MOVE_DELAY);
    })
};

const clickImage = (img, btn) => {
    let tekst = document.getElementById("tekst");

    if (img.getAttribute('src') === "images/0.png") {
        btn.style.display = 'inline-block';
        window.alert("GAME OVER")
        global.score = 0;
        tekst.innerText = "Aantal hits 0";
        clearInterval(global.timeoutId);
    } else {
        global.score++;
        tekst.innerText = "Aantal hits " + global.score;
        changeImage()
    }
}
const changeImage = () => {
    let img = document.getElementById('img');
    img.setAttribute('src', global.IMAGE_PATH_PREFIX + Math.round(Math.random() * 4) + global.IMAGE_PATH_SUFFIX);
    img.style.left = Math.floor(10 + Math.random() * 550) + "px";
    img.style.top = Math.floor(10 + Math.random() * 750) + "px";
}

window.addEventListener("load", setup);


