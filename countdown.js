function countdownByFor(upperLimit) {
  for (let i=upperLimit; i >= 0; i--) {
    console.log(i);
    /* alert(i); */
  }
}

function countdownByWhile(upperLimit) {
  let i = upperLimit;
  while (i >= 0) {
    console.log(i);
    /* alert(i); */
    i--;
  }
}

function startCountdown(upperLimit) {
  /* alert("Commencing countdown..."); */
  console.log("Commencing countdown...");
  countdownByFor(upperLimit);
  /* countdownByWhile(upperLimit); */
}

startCountdown(10);
