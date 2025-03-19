const setup = () => {
    let btnToon=document.getElementById("btnToon");
    let tekst = document.getElementById("tekst");
    btnToon.addEventListener("click", (e) => {
        toon(tekst)
    });
};

const toon = (tekst) => {
    tekst.innerText = document.getElementById("txtInput").value.split('').join(' ');
};


window.addEventListener("load", setup);