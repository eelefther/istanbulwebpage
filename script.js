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
document.addEventListener("DOMContentLoaded", () => {
    let images = ['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg', 'img/image4.jpg', 'img/image5.jpg', 'img/image6.jpg'];
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
});

// JavaScript to toggle the menu visibility on mobile
document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('nav-list').classList.toggle('show');
});

// JavaScript to handle news previews
document.addEventListener("DOMContentLoaded", () => {
    // News data
    const newsData = [
      {
        img: "img/news1.jpg",
        title: "Health workers on trial in Turkey accused of private care scheme linked to 10 infant deaths",
        description: "Doctors, nurses and an ambulance driver are among 47 people on trial accused of causing the deaths of 10 infants as part of an alleged scheme to defraud Turkey’s social security system.",
        link: "news1.html",
      },
      {
        img: "img/news2.jpg",
        title: "Police in Turkey detain demonstrators seeking more protection for women against violence",
        description: "Police detained dozens of people in Istanbul who tried to join a rally Monday calling for greater protection for women in Turkey, where more than 400 women have been murdered this year.",
        link: "news2.html",
      },
      {
        img: "img/news3.jpg",
        title: "Kurdish militants claim responsibility for deadly attack on Turkish defense firm",
        description: "A banned Kurdish militant group on Friday claimed responsibility for an attack on the headquarters of a key defense company in Ankara that killed at least five people.",
        link: "news3.html",
      },
    ];
  
    let currentIndex = 0; // Tracks the current news item
    const newsContainer = document.getElementById("news-container");
  
    // Function to render news item
    const renderNews = () => {
      const news = newsData[currentIndex];
      newsContainer.innerHTML = `
        <div class="news-item">
          <img src="${news.img}" alt="News Thumbnail" class="thumbnail" />
          <div class="news-info">
            <h3><a href="${news.link}">${news.title}</a></h3>
            <p>${news.description}</p>
            <a href="${news.link}" class="read-more">Read More</a>
          </div>
        </div>
      `;
    };
  
    // Event listeners for buttons
    document.getElementById("prev-news").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + newsData.length) % newsData.length; // Wraps around
      renderNews();
    });
  
    document.getElementById("next-news").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % newsData.length; // Wraps around
      renderNews();
    });
  
    // Initial render
    renderNews();
  });