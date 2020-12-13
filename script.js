// Tutorial credit for the letter animation -- https://tobiasahlin.com/

// Wrap every letter in a span
var textWrapper = document.querySelector('.animation .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Create letter animation
anime.timeline({loop: true})
  .add({
    targets: '.animation .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.animation',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
