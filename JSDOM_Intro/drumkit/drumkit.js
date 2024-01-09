// Function to play the drum sound
function playDrumSound(sound) {
    const audio = new Audio(`sounds/${sound}.wav`);
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play();
}

// Event listeners for each drum button
document.getElementById("boomButton").addEventListener("click", () => {
    playDrumSound("boom");
});

document.getElementById("clapButton").addEventListener("click", () => {
    playDrumSound("clap");
});

document.getElementById("hihatButton").addEventListener("click", () => {
    playDrumSound("hihat");
});

document.getElementById("kickButton").addEventListener("click", () => {
    playDrumSound("kick");
});
