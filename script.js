const profilePicture = document.getElementById('profile-picture');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = profilePicture.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    const rotation = angle * (180 / Math.PI) + 90;
    profilePicture.style.transform = `rotate(${rotation}deg)`;
});
// Pobranie elementu audio
var audio = document.getElementById("myAudio");

// Dodanie obsługi zdarzenia kliknięcia na całym dokumencie
document.addEventListener("click", function() {
    // Odtworzenie dźwięku
    audio.play();
});
