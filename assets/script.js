let darkToggle = document.querySelector("#darkToggle");
let main = document.querySelector("#main");
let aboutDev = document.querySelector('#dev');

function myFunction() {
  if (darkToggle.checked) {
    main.style.background = "#444";
    main.style.color = "white"
    aboutDev.style.background = "#444";
  } else {
    main.style.background = "#f5f5f5";
    main.style.color = 'black'
    aboutDev.style.background = "#f5f5f5";
  }
}
