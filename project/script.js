//  const displayCard = document.getElementById("displayCard");
//   const overlay = document.getElementById("overlay");
//   const cardDescription = document.getElementById("cardDescription");

//   function openCard(description) {
//     displayCard.classList.remove("-translate-x-full");
//     overlay.classList.remove("hidden");
//     cardDescription.textContent = description;
//   }

//   function closeCard() {
//     displayCard.classList.add("-translate-x-full");
//     overlay.classList.add("hidden");
//   }

 gsap.registerPlugin(ScrollTrigger);

    
 
    ScrollTrigger.create({
      trigger: "#get-hired-steps",
      start: "top top",
      end: "+=1000", 
      
      pin: true,
      scrub: false
    });

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