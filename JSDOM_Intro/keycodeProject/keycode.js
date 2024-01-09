document.addEventListener("keydown", (event) => {
    document.querySelector('.info').style.display = "flex";
    const intro = document.getElementById("intro");
    intro.textContent = "Press another key";
    const codeElement = document.getElementById("code");
    const keyElement = document.getElementById("key");
    const charElement = document.getElementById("char");

    // Update the content
    codeElement.textContent = `code: ${event.code}`;
    keyElement.textContent = `key: ${event.key}`;
    charElement.textContent = `charCode: ${event.charCode || event.keyCode}`;
});
