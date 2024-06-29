// positioning the element, also known as "dodger" moving forward.
dodger.style.bottom = "100px";

// Any time an event listener is in place and the event it's listening for is triggered 
// We are going to want the dodger to go left, right, up, down. 

document.addEventListener("keydown", function (event) {
  console.log(event);
});

// this documents that anytime the event listener triggers, a function to move, left. the dodger moves left.
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});

const dodger = document.getElementById("dodger");

// this is building our moveDodgerLeft function, adding a check on the current position.
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// Fix the function declaration and add the missing curly braces
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});