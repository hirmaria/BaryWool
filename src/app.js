function getInTouch(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;

  alert(`Hello, ${name}! We'll contact you as soon as possible!`);
}
let form = document.querySelector("form");
form.addEventListener("submit", getInTouch);
