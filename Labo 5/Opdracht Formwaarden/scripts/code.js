const setup = () => {

    let btn = document.getElementById('btn');
    btn.addEventListener('click', (e) => {4
        e.preventDefault();
        let isRoker = document.getElementById('isRoker').checked;
        let moedertaal = document.getElementsByName("taal");
        let land = document.getElementById("land");
        let bestelling = document.getElementById("bestelling");
        form(isRoker, moedertaal, land, bestelling);
    })
}
const form = (isRoker, moedertaal, land, bestelling) => {
    let bestellingen = "";
    if (isRoker === true) {
        console.log("Is roker");
    } else {
        console.log("Is geen roker");
    }
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked) {
            console.log("moedertaal is " + moedertaal[i].id);
        }
    }
    console.log("Favoriete buurland is " + land.options[land.selectedIndex].value);
    for (let j = 0; j < bestelling.length; j++) {
        if (bestelling[j].selected){
            bestellingen += bestelling[j].value + " ";
        }

    }
    console.log("Bestelling bestaat uit " + bestellingen);
}
window.addEventListener("load", setup);