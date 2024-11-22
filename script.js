let images = ['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg','img/image4.jpg','img/image5.jpg','img/image6.jpg'];
let currentIndex = 0;

function showImage(index) {
    document.getElementById('image').src = images[index];
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

images.forEach((src) => {
    const img = new Image();
    img.src = src;
});

// JavaScript to toggle the menu visibility on mobile
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('show');
});
