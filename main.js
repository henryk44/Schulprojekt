var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


bars.addEventListener("click", barClicked, false);


function barClicked() {
    bars.classList.toggle('active');
    nav.classList.toggle('visible');
}

const videoPlayer = document.getElementById('videoPlayer');
const videoInput = document.getElementById('videoInput');

videoInput.addEventListener('change', function() {
    const selectedVideo = videoInput.files[0];
    if (selectedVideo) {
        const videoURL = URL.createObjectURL(selectedVideo);
        videoPlayer.src = videoURL;
    }
});