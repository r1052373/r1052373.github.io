const setup = () => {
    let btn = document.getElementById('btn');
    let output = document.getElementById('output');

    const converter = () => {
        let tekstInput = document.getElementById('tekst');
        let tekst = tekstInput.value;
        let woorden = tekst.split(' ');
        let newZin = '';

        woorden.forEach((woord, index) => {
            let newWoord = woord;
            if (woord.toLowerCase() === 'de') {
                newWoord = 'het';
            }
            newZin += newWoord;
            if (index !== woorden.length) {
                newZin += ' '
            }
        });
        output.innerText = newZin;
    }

    btn.addEventListener('click', converter);
}

window.addEventListener("load", setup);
