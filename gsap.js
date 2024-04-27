gsap.from(".chatbot", {
  y: 20,
  delay: 5,
  duration: 0.2,
  opacity: 0,
});

function time() {
  var a = 0;

  setInterval(() => {
    a = a + Math.floor(Math.random() * 30);
    if (a < 100) {
      document.querySelector(".page h1").innerHTML = a + "%";
    } else {
      a = 100;
      document.querySelector(".page h1").innerHTML = a + "%";
    }
  }, 150);
}

gsap.to(".page", {
  y: "-100vh",
  duration: 3,
  delay: 1,

  onstart: time(),
});

gsap.from(".page p span", {
  x: 10,
  opacity: 0,
  stagger: 0.5,
  duration: 1,
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: `top top`,
    scrub: 1,
    scroller: `body`,
    // markers: true,
    pin: true,
  },
});
t1.to("#page2>div", {
  top: "-50%",
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    start: `top top`,
    scrub: 1,
    scroller: `body`,
    // markers: true,
    pin: true,
  },
});
tl1.to("#page3>div", {
  top: "-50%",
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    start: `top top`,
    scrub: 1,
    scroller: `body`,
    // markers: true,
    pin: true,
  },
});
tl2.to("#page6>div", {
  top: "-50%",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page8",
    start: `top top`,
    scrub: 1,
    scroller: `body`,
    // markers: true,
    pin: true,
  },
});
tl3.to("#page8>div", {
  top: "-50%",
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page10",
    start: `top top`,
    scrub: 1,
    scroller: `body`,
    // markers: true,
    pin: true,
  },
});
tl4.to("#page10>div", {
  top: "-50%",
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page12",
    start: `top top`,
    scrub: 1,
    scroller: `body`,
    // markers: true,
    pin: true,
  },
});
tl5.to("#page12>div", {
  top: "-50%",
});
