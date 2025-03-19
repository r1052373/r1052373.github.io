let Rijen = [];
let currentRij = 0;
let currentIndex = 0;
let currentPaar = null;

const setup = () => {
    let row1 = [0, 1, 0, 1, 1, 1, 0, 1, 0];
    let row2 = [0, 1, 0, 0, 1, 0, 1, 1, 1];
    let row3 = [1, 1, 1, 1, 1, 1, 0, 1, 0];
    let row4 = [1, 1, 1, 0, 1, 0, 0, 1, 0];
    Rijen = [row1, row2, row3, row4];
    let submit = document.getElementById("submit");
    let submit1 = document.getElementById("submit1");
    submit.addEventListener("click", () => {
        zoekPaar(Rijen);
    });
    submit1.addEventListener("click", () => {
        maakOnbeschikbaar();
    });
    for (let i = 0; i < Rijen.length; i++) {
        maakStoelen(Rijen[i]);
    }
};

const maakStoelen = (row) => {
    let fotos = document.getElementById("fotos");
    for (let i = 0; i < row.length; i++) {
        let img = document.createElement("img");
        if (row[i] === 0) {
            fotos.appendChild(img);
            img.setAttribute("src", "./images/seat_unavail.png");
        } else if (row[i] === 1) {
            fotos.appendChild(img);
            img.setAttribute("src", "./images/seat_avail.png");
        }
    }
};

const zoekPaar = (rows) => {
    let fotos = document.getElementById("fotos");
    for (let i = 0; i < fotos.children.length; i++) {
        if (fotos.children[i].src.includes("seat_select.png")) {
            fotos.children[i].src = "./images/seat_avail.png";
        }
    }
    for (let i = currentRij; i < rows.length; i++) {
        let start = (i === currentRij) ? currentIndex : 0;
        for (let j = start; j <= rows[i].length - 3; j++) {
            if (rows[i][j] === 1 && rows[i][j + 1] === 1 && rows[i][j + 2] === 1) {
                let index1 = i * rows[i].length + j;
                let index2 = i * rows[i].length + j + 1;
                let index3 = i * rows[i].length + j + 2;
                fotos.children[index1].src = "./images/seat_select.png";
                fotos.children[index2].src = "./images/seat_select.png";
                fotos.children[index3].src = "./images/seat_select.png";
                currentPaar = { row: i, indices: [j, j + 1, j + 2] };
                currentRij = i;
                currentIndex = j + 1;
                return;
            }
        }
    }
    currentRij = 0;
    currentIndex = 0;
    currentPaar = null;
};

const maakOnbeschikbaar = () => {
    if (!currentPaar) return;
    let fotos = document.getElementById("fotos");
    let rijIndex = currentPaar.row;
    let stoelen = currentPaar.indices;
    for (let k = 0; k < stoelen.length; k++) {
        let Index = rijIndex * Rijen[rijIndex].length + stoelen[k];
        fotos.children[Index].src = "./images/seat_unavail.png";
        Rijen[rijIndex][stoelen[k]] = 0;
    }
    currentPaar = null;
};

window.addEventListener("load", setup);
