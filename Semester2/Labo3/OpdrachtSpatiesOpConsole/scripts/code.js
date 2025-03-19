const setup = () => {
    const spaties = () => {
        let string = document.getElementById("text").value;
        let output = string.split('').join(' ')
        console.log(output);
        document.getElementById('output').innerText = output;
    };
    document.getElementById("button").addEventListener("click", spaties);
}
window.addEventListener("load", setup);