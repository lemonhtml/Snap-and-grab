
function createBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    const xPos = Math.random() * window.innerWidth;
    bubble.style.left = `${xPos}px`;
    document.body.appendChild(bubble);

    bubble.addEventListener("animationiteration", () => {
        bubble.remove();
        createBubble();
    });
}

// Create initial bubbles
for (let i = 0; i < 10; i++) {
    createBubble();
}
// Particle Animation
const container = document.querySelector('.container');
const bubble = document.querySelector('.bubble');

// Function to create a particle
function createParticle() {
  const particle = document.createElement('span');
  particle.classList.add('particle');
  const size = Math.random() * 60 + 20 + 'px';
  particle.style.width = size;
  particle.style.height = size;
  particle.style.left = Math.random() * innerWidth + 'px';
  particle.style.animationDuration = Math.random() * 2 + 1 + 's';
  particle.style.opacity = Math.random();
  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 2000);
}

// Create particles every 100ms
setInterval(createParticle, 100);

// Digital Clock
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = hours + ':' + minutes;
  clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);
