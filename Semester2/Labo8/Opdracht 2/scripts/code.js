const setup = () => {
    let student={
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : {
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"],
        aantalAutos : 2
    }
    let json = JSON.stringify(student);
    console.log(json);
    let student1 = JSON.parse(json);
    console.log(student);
}
window.addEventListener("load", setup);