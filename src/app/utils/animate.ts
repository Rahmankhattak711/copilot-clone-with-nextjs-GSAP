import gsap from "gsap";

export const animateCards = () =>
  gsap.to(".cardOne, .cardTwo", {
    y: -1000,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cardOne, .cardTwo",
      start: "top 10%",
      end: "bottom 60%",
      scrub: 0.2,
    },
  });

export const handleMouseMove = (e: MouseEvent) => {
  const x = (e.clientX - window.innerWidth / 2) * 0.05;
  const y = (e.clientY - window.innerHeight / 2) * 0.05;
  gsap.to(".cloudOne img, .cloudTwo img", {
    x,
    y,
    duration: 0.4,
    ease: "sine.out",
  });
};

export const animateFloor = () => gsap.to(".floor-img", {
        y: "1%",
        scale: 1.3,
        ease: "sine.out",
        scrollTrigger: {
          trigger: ".floor-img",
          start: "top bottom",
          end: "bottom top",
          scrub: 8,
        },
      });
