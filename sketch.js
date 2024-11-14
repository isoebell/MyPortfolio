// Select all images you want to make full-screenable
const images = document.querySelectorAll('.project-images img');

// Add a click event listener for each image
images.forEach(function (image) {
    image.addEventListener('click', function () {
        toggleFullscreen(image);
    });
});

// Function to toggle full-screen mode
function toggleFullscreen(image) {
    if (!document.fullscreenElement) {
        // Enter fullscreen mode for the clicked image
        if (image.requestFullscreen) {
            image.requestFullscreen();
        } else if (image.mozRequestFullScreen) { // Firefox
            image.mozRequestFullScreen();
        } else if (image.webkitRequestFullscreen) { // Chrome, Safari, Opera
            image.webkitRequestFullscreen();
        } else if (image.msRequestFullscreen) { // IE/Edge
            image.msRequestFullscreen();
        }
    } else {
        // Exit fullscreen mode if currently in fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}
