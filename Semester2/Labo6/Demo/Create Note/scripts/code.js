const setup = () => {
    let p = document.createElement('p');
    p.setAttribute("class", "color");
    p.setAttribute("id", "txtPar");
    let txtNode = document.createTextNode("Hello World!")
    p.appendChild(txtNode);
    document.querySelector('#myDIV').appendChild(p);
}
window.addEventListener("load", setup);