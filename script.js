// Smooth scroll for navbar buttons
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Open certificate image in fullscreen
function openImage(src) {
    const viewer = document.getElementById("imageViewer");
    const img = document.getElementById("viewerImg");

    if (viewer && img) {
        img.src = src;
        viewer.style.display = "flex";
    }
}

// Close fullscreen image
function closeImage() {
    const viewer = document.getElementById("imageViewer");
    if (viewer) {
        viewer.style.display = "none";
    }
}



