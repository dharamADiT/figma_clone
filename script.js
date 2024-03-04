

gsap.to(".teams h2", {
  x: "-100%", // Move the marquee left by 100% of its width
  duration: 20, // Adjust duration based on your preference
  overflowx:'show',
  repeat: -1, 
    ease: "linear",
  scrollTrigger:{
    trigger:'.teams h2',
    scroll:'body',
  
    start:"top 90%",
    end:"top 10"

  } 
});
