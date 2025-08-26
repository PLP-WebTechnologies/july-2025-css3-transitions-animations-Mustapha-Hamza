// Part 2: Functions (scope, parameters, return values)

// Global variable (global scope)
let animationActive = false;

// Function with parameters + return value
function calculateDouble(number) {
  return number * 2;
}

// Function demonstrating local scope
function logMessage(msg) {
  let localMessage = "Local: " + msg; // local variable
  console.log(localMessage);
}

// Part 3: Combining CSS & JS
const box = document.querySelector(".animated-box");
const animateBtn = document.getElementById("animateBtn");
const stopBtn = document.getElementById("stopBtn");
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");

// Function to start animation
function startAnimation() {
  if (!animationActive) {
    box.style.animation = "slide 2s infinite";
    animationActive = true;
    logMessage("Box animation started");
  }
}

// Function to stop animation
function stopAnimation() {
  box.style.animation = "none";
  animationActive = false;
  logMessage("Box animation stopped");
}

// Function to show popup
function showPopup() {
  popup.classList.add("show");
}

// Function to close popup
function closePopup() {
  popup.classList.remove("show");
}

// Keyframe defined via JS-injected style
const style = document.createElement("style");
style.innerHTML = `
@keyframes slide {
  0% { transform: translateX(0); background: pink; }
  50% { transform: translateX(100px); background: lightblue; }
  100% { transform: translateX(0); background: pink; }
}`;
document.head.appendChild(style);

// Event listeners
animateBtn.addEventListener("click", startAnimation);
stopBtn.addEventListener("click", stopAnimation);
popupBtn.addEventListener("click", showPopup);

// Example use of function with return value
console.log("Double of 5 is:", calculateDouble(5));
