/*Biblioteca GreenSock - estrelas*/
const imgHero = document.querySelectorAll(".img-hero");

/*Biblioteca GreenSock - estrelas*/
TweenMax.staggerFromTo(
  imgHero,
  0.75,
  {
    opacity: 0,
    transform: "scale(0)",
  },
  {
    opacity: 1,
    repeat: -1,
    transform: "scale(1.2)",
    yoyo: true,
  },
  0.2
);
