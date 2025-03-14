const setup = () => {
    let btn = document.getElementById('btn');
    let output = document.getElementById('output');

    btn.addEventListener('click', () => {
        let tekst = document.getElementById('tekst').value;
        trigram(tekst, output);
    });
}

const trigram = (tekst, output) => {
    let outputTekst = "";
    for (let i = 0; i < tekst.length - 2; i++) {
        let trigram = tekst.slice(i, i + 3);
        output.innerHTML += "<li>" + trigram;
    }

}

window.addEventListener("load", setup);
