document.addEventListener("click", () => {
    const x = event.clientX;
    const y = event.clientY;

    const coordinatesElement = document.getElementById("coordinates");
    coordinatesElement.textContent = `Clicked at X: ${x}, Y: ${y}`;
})