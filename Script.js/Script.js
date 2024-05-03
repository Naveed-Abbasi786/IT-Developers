// Function to handle playing or pausing the video
function toggleVideo() {
    var video = document.getElementById("video-player");
    var vedioColumn = document.querySelector(".vedio-colum");
    video.style.filter = "blur(0px)";
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}


// Function to hide the play button when the video starts playing
function hidePlayButton() {
    var playButton = document.querySelector(".play-button");
    playButton.style.display = "none";
}

// Event listener to hide the play button when the video starts playing
document.getElementById("video-player").addEventListener("play", hidePlayButton);


document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-menu');

    navbarToggler.addEventListener('click', function () {
        navbarMenu.classList.toggle('show');
    });
});