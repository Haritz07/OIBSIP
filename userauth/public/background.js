
// Array of image filenames
let images = ["fall.jpeg", "leaf.jpeg", "flowerPlant.jpeg", "w1 (1).jpg", "w1 (2).jpg", "w1 (4).jpg"];
let currentIndex = 0;

function changeBackground() {
  // Generate a random index within the range of the images array
  const randomIndex = Math.floor(Math.random() * images.length);
  // Get the selected image filename
  const selectedImage = images[randomIndex];
  // Update the background image of the body element
  document.body.style.backgroundImage = `url('img/${selectedImage}')`;
}

// Call the changeBackground function when the window.
setInterval(changeBackground, 4000);



