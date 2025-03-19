const setup = () => {
    let p = document.getElementById("para");
    console.log(p.nodeName, p.nodeType);
    console.log(p.firstChild, p.firstChild.nodeType);
    console.log(p.firstElementChild, p.firstElementChild.nodeType);
    console.log(p.nextElementSibling, p.nextElementSibling.nodeType);
}
window.addEventListener("load", setup);