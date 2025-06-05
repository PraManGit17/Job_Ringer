window.addEventListener("DOMContentLoaded", () => {
  // Quick fade-in for messages
  gsap.from(".job-message", {
    opacity: 0,
    stagger: 0.2,
    duration: 0.4,
    ease: "power1.out"
  });

  // Fade-in with slight zoom for image
  gsap.from("#job-image", {
    opacity: 0,
    scale: 0.95,
    delay: 1,
    duration: 0.6,
    ease: "power1.out"
  });
});



gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".step-card").forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});



window.addEventListener("DOMContentLoaded", () => {
  gsap.from("#hero-title", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from("#hero-subtext", {
    duration: 1,
    delay: 0.5,
    y: 30,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from("#cta-buttons", {
    duration: 1,
    delay: 1,
    scale: 0.9,
    opacity: 0,
    ease: "back.out(1.7)"
  });
});