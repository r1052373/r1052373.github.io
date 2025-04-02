const setup = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    year -= 2007;
    month -= 5;
    day -= 25;
    let dagen = (year*365) + (month*31) + day;
    console.log(dagen + " dagen sinds 25 mei 2007");

}
window.addEventListener("load", setup);