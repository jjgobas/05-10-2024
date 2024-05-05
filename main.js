// * SCROLLREVEAL
ScrollReveal().reveal('p, .scroll');

// * GSAP
gsap.registerPlugin(ScrollTrigger)

let ms = gsap.matchMedia();

ms.add("(min-width: 320px", () => {
    gsap.to(".polaroid", {
        scrollTrigger: {
            trigger: ".text__block--botton-right",
            start: "top center",
            markers: true,
            scrub: true
        },
        y: -200,
    })
})
