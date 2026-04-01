const instagramBtn = document.getElementById("instagram");
const twitterBtn = document.getElementById("twitter");
const youtubeBtn = document.getElementById("youtube");

instagramBtn.addEventListener("click", () => {
    window.open("https://instagram.com");
});

twitterBtn.addEventListener("click", () => {
    window.open("https://twitter.com");
});

youtubeBtn.addEventListener("click", () => {
    window.open("https://youtube.com");
});