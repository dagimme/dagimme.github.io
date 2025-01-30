// Handle the "YES!" button
document.getElementById("yesButton").addEventListener("click", function() {
  // Remove the buttons
  document.getElementById("yesButton").remove();
  document.getElementById("noButton").remove();
  
  // Show the response message
  document.getElementById("response").classList.remove("hidden");

  // Trigger confetti
  confetti({
    particleCount: 150,
    spread: 60,
    origin: { y: 0.6 }
  });
});

// Handle the "No" button
const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", () => {
  // Move the button to a random position
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

noButton.addEventListener("click", () => {
  alert("Haha, you can't say no! 😜");
});