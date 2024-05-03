const navbarTimeline = gsap.timeline();

navbarTimeline.from(".logo", { y: -30, opacity: 0, duration: 1, delay: 0.5 });
navbarTimeline.from(".nav-link", {
  y: -40,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});
navbarTimeline.from(".Contact-Us", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

const heroTimeline = gsap.timeline();

heroTimeline.from(".Hero-Section .content h1", {
  x: -30,
  opacity: 0,
  duration: 1.5,
});
heroTimeline.from(".Hero-Section .content > p", {
  x: -30,
  opacity: 0,
  duration: 1.5,
});
heroTimeline.from(".Started", { y: 30, opacity: 0, duration: 1 });
heroTimeline.from(".hero", { x: -30, opacity: 0, duration: 1.5 });


gsap.from("#Ellipse",{
    width:80,
    x:1070,
    rotate:160,
    duration:6,
    delay:1,
    repeat:-1,
    yoyo:true
})
