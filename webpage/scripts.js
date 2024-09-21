window.addEventListener('scroll', () => {
    const videoContainer = document.getElementById('videoContainer');
    const scrollY = window.scrollY;
    // Move the video container up as you scroll down
    videoContainer.style.transform = `translateY(-${scrollY}px)`;
});
