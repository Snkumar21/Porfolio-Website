// Modal Script
function openModal() {
    document.getElementById("visualModal").style.display = "block";
}

function closeModal() {
    document.getElementById("visualModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("visualModal");
    if (event.target === modal) {
        closeModal();
    }
};