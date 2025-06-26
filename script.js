// 🌗 Toggle dark/light theme
function toggleTheme() {
  document.body.classList.toggle('light');
}

// 🧠 Typewriter effect for tagline
const tagline = document.getElementById('tagline');
const text = "Future Game Engineer";
let i = 0;

function type() {
  if (i <= text.length) {
    tagline.textContent = text.substring(0, i);
    i++;
    setTimeout(type, 80); // Typing speed
  }
}

// When page loads, start typing animation
window.onload = type;

// 🎮 Number guessing game logic
let secretNumber = Math.floor(Math.random() * 100) + 1; // Generate random number from 1-100

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value); // Get user input
  const feedback = document.getElementById("feedback");

  if (isNaN(guess)) {
    feedback.textContent = "Please enter a number!";
    return;
  }

  if (guess < secretNumber) {
    feedback.textContent = "📉 Too low!";
  } else if (guess > secretNumber) {
    feedback.textContent = "📈 Too high!";
  } else {
    feedback.textContent = "🎉 You got it! Great job!";
  }
}

// 🔄 Restart the game with a new number
function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("feedback").textContent = "";
  document.getElementById("guessInput").value = "";
}

let isPlaying = false;

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if (!isPlaying) {
    music.play();
    btn.textContent = "🔇 Pause Music";
  } else {
    music.pause();
    btn.textContent = "🎵 Play Music";
  }

  isPlaying = !isPlaying;
}
