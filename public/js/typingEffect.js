document.addEventListener('DOMContentLoaded', function() {
    const mottos = ["Harvesting Excellence, Serving Freshness", "Fresh from the Lake, Delivered to You", "Quality Seafood, Anytime, Anywhere"];
    let mottoIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 50; // Adjusted speed
    const erasingSpeed = 50;
    const pauseBetween = 2000; // Pause between typing new motto
    const mottoElement = document.getElementById('dynamicMotto');

    function typeMotto() {
        const currentMotto = mottos[mottoIndex];

        if (!isDeleting && charIndex < currentMotto.length) {
            mottoElement.textContent += currentMotto.charAt(charIndex);
            charIndex++;
            setTimeout(typeMotto, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            mottoElement.textContent = currentMotto.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeMotto, erasingSpeed);
        } else if (!isDeleting && charIndex === currentMotto.length) {
            isDeleting = true;
            setTimeout(typeMotto, pauseBetween);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            mottoIndex = (mottoIndex + 1) % mottos.length;
            setTimeout(typeMotto, typingSpeed);
        }
    }

    typeMotto();
});
