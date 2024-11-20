let images = ['image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg','image5.jpg','image6.jpg'];
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

