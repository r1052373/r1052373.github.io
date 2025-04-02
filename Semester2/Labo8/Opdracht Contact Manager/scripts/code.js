let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    // indien ok, bewaar de ingegeven data.
    // een nieuw aangemaakte persoon voegen we toe
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");

    let persoon = {
        voornaam: txtVoornaam.value,
        familienaam: txtFamilienaam.value,
        geboorteDatum: txtGeboorteDatum.value,
        email: txtEmail.value,
        aantalKinderen: txtAantalKinderen.value
    }
    let gevonden = false;
    for (let i = 0; i < personen.length; i++) {
        if (personen[i].voornaam === persoon.voornaam && personen[i].familienaam === persoon.familienaam) {
            personen[i] = persoon;
            gevonden = true;
            break;
        }
    }

    if (!gevonden) {
        personen.push(persoon);
        let lstPersonen = document.getElementById("lstPersonen");
        let option = document.createElement("option");
        lstPersonen.appendChild(option);
        option.innerText = `${persoon.voornaam} ${persoon.familienaam}`;
    }

    // een bestaande persoon in de lijst passen we aan
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren

    let velden = document.getElementsByTagName("input");
    for (let i = 0; i < velden.length; i++) {
        if (velden[i].getAttribute("type") === "text"){
            velden[i].value = "";
        }
    }
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.addEventListener("change", (e) => {
        let txtVoornaam = document.getElementById("txtVoornaam");
        let txtFamilienaam = document.getElementById("txtFamilienaam");
        let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
        let txtEmail = document.getElementById("txtEmail");
        let txtAantalKinderen = document.getElementById("txtAantalKinderen");

        let selectedName = e.target.value.trim();
        let nameParts = selectedName.split(" ");
        let voornaam = nameParts[0];
        let familienaam = nameParts.slice(1).join(" ");

        for (let i = 0; i < personen.length; i++) {
            if (personen[i].voornaam === voornaam && personen[i].familienaam === familienaam) {
                let persoon = personen[i];

                txtVoornaam.value = persoon.voornaam;
                txtFamilienaam.value = persoon.familienaam;
                txtGeboorteDatum.value = persoon.geboorteDatum;
                txtEmail.value = persoon.email;
                txtAantalKinderen.value = persoon.aantalKinderen;
                break;
            }
        }
    })
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);