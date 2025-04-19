const typewriter = document.querySelector(".typewriter");
const roles = ["Nitish Kumar Singh ", "Technologist ", "Developer ", "AI Enthusiast "];
let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function type() {
    if (index >= roles.length) index = 0;
    currentRole = roles[index];

    let displayText = isDeleting
        ? currentRole.substring(0, charIndex--)
        : currentRole.substring(0, charIndex++);

    typewriter.textContent = displayText;

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index++;
        setTimeout(type, 800);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}
type();