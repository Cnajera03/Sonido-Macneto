// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// FORCE VIDEO AUTOPLAY ON MOBILE

document.addEventListener("DOMContentLoaded", () => {

    const videos = document.querySelectorAll("video");

    videos.forEach(video => {

        video.muted = true;
        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.setAttribute("autoplay", "");
        video.setAttribute("loop", "");

        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }

    });

});