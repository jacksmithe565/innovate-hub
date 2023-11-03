// Filename: complex_animation.js
// Content: Complex animation with SVG and interactivity

// Create SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "800");
svg.setAttribute("height", "600");
document.body.appendChild(svg);

// Create a rectangle
const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute("x", "100");
rect.setAttribute("y", "100");
rect.setAttribute("width", "200");
rect.setAttribute("height", "100");
rect.setAttribute("fill", "blue");
svg.appendChild(rect);

// Define rectangle motion
let directionX = 1;
let directionY = 1;
let speedX = 2;
let speedY = 1;

// Create animation loop
function animateRect() {
  // Move the rectangle
  let x = parseInt(rect.getAttribute("x"));
  let y = parseInt(rect.getAttribute("y"));
  if (x <= 0 || x + 200 >= 800) {
    directionX *= -1;
  }
  if (y <= 0 || y + 100 >= 600) {
    directionY *= -1;
  }
  x += directionX * speedX;
  y += directionY * speedY;
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);

  // Change rectangle color randomly
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  rect.setAttribute("fill", "#" + randomColor);

  // Repeat animation
  requestAnimationFrame(animateRect);
}
animateRect();

// Add interactivity
rect.addEventListener("click", () => {
  // Scale the rectangle
  rect.setAttribute("transform", "scale(1.5)");

  // Fade out animation
  let opacity = 1;
  function fadeOut() {
    opacity -= 0.01;
    rect.setAttribute("opacity", opacity);
    if (opacity > 0) {
      requestAnimationFrame(fadeOut);
    }
  }
  fadeOut();
});
