const setup = () => {
    let btnToon=document.getElementById("btnToon");
    btnToon.addEventListener("click", toon);
};

const toon = () => {
    console.log(document.getElementById("txtInput").value.split('').join(' '));
};


window.addEventListener("load", setup);