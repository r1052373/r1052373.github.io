let AANTAL_KAARTEN = 6;
let clickedKaart = []
let isBusy = false;
const setup = () => {
    let container = document.getElementById('container');
    let kaarten = [];
    for (let i = 1; i <= AANTAL_KAARTEN; i++) {
        kaarten.push("images/kaart" + i + ".jpg");
    }
    let deck = [];

    kaarten.forEach(src => {
        deck.push(src, src);
    });

    deck.sort(() => Math.random() - 0.5);

    deck.forEach(src => {
        let kaart = document.createElement("div");
        kaart.classList.add("tile");
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("hidden");
        kaart.appendChild(img);
        kaart.addEventListener("click", handleClick);
        container.appendChild(kaart);
    });
};


const handleClick = (e) => {
    let img = e.currentTarget.querySelector('img');
    addCard(e, img);
};
const addCard = (e, img) => {
    if (clickedKaart.includes(e.target)) {
        return;
    }
    if (isBusy === false) {

        if (clickedKaart.length < 2) {
            img.classList.remove('hidden')
            clickedKaart.push(img);
        }
        if (clickedKaart.length === 2) {
            isBusy = true;
            if (clickedKaart[0].getAttribute('src') === clickedKaart[1].getAttribute('src')) {
                for (let i = 0; i < clickedKaart.length; i++) {
                    clickedKaart[i].classList.add('correct');
                }
                setTimeout(completeCard, 1000)

            } else {
                for (let i = 0; i < clickedKaart.length; i++) {
                    clickedKaart[i].classList.add('wrong');
                }
                setTimeout(hideCard, 1000)
            }

        }
    }

}

const completeCard = () => {
    play()
    for (let i = 0; i < clickedKaart.length; i++) {
        clickedKaart[i].classList.add('hidden');
        clickedKaart[i].parentElement.classList.add('completed');
        clickedKaart[i].parentElement.removeEventListener('click', handleClick);
        clickedKaart[i].classList.remove('correct');
    }

    clickedKaart.length = 0;
    isBusy = false;
}
const hideCard = () => {
    play()
    for (let i = 0; i < clickedKaart.length; i++) {
        clickedKaart[i].classList.add('hidden');
        clickedKaart[i].classList.remove('wrong');
    }

    clickedKaart = [];
    isBusy = false;
}
const play = () => {
    let audio = new Audio('audio/flipcard.mp3');
    audio.play().catch(error => {
        console.error('Audio playback failed:', error);
    });
}
window.addEventListener("load", setup);


