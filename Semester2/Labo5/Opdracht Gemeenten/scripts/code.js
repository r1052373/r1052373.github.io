const setup = () => {
    let list = document.getElementById('list');
    let gemeente = '';

    while (gemeente.toLowerCase() !== "stop") {
        gemeente = window.prompt("Gemeente:");
        if (gemeente && gemeente.toLowerCase() !== "stop") {
            list.innerHTML += "<option>" + gemeente;
        }
    }
}

window.addEventListener("load", setup);
