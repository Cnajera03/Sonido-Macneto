// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// VIDEO FIX FOR MOBILE

window.addEventListener("load", () => {

    const videos = document.querySelectorAll("video");

    videos.forEach(video => {

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        const playVideo = () => {
            video.play().catch(() => {});
        };

        playVideo();

        document.addEventListener(
            "touchstart",
            playVideo,
            { once: true }
        );

    });

});

