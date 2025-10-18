let canvas;
let ctx;
let particles = [];
let particleCount;

class Particle {
  constructor() {
    this.reset();
    this.y = Math.random() * canvas.height;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() / 5 + 0.1;
    this.opacity = 1;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.reset();
    }

    if (!this.fadingOut && Date.now() > this.fadeStart) {
      this.fadingOut = true;
    }

    if (this.fadingOut) {
      this.opacity -= 0.008;
      if (this.opacity <= 0) {
        this.reset();
      }
    }
  }

  draw() {
    // Check if gold theme is active
    const isGold = document.body.classList.contains("gold");
    if (isGold) {
      // Gold theme colors
      ctx.fillStyle = `rgba(216, 189, 16, ${this.opacity})`; // #d8bd10
    } else {
      // Default theme colors
      ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${
        this.opacity
      })`;
    }
    ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

function calculateParticleCount() {
  return Math.floor((canvas.width * canvas.height) / 6000);
}

function onResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particleCount = calculateParticleCount();
  initParticles();
}

function initParticleAnimation() {
  // Get canvas element
  canvas = document.getElementById("particleCanvas");
  if (!canvas) {
    console.error("Canvas element not found");
    return;
  }

  // Get context
  ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Could not get canvas context");
    return;
  }

  // Set initial size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Calculate particle count
  particleCount = calculateParticleCount();

  // Initialize particles
  initParticles();

  // Start animation
  animate();

  // Add resize listener
  window.addEventListener("resize", onResize);
}

export default initParticleAnimation;
