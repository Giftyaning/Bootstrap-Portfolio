//Name typing 
const name = "Gifty Aning";
const role = "Front-end Developer";
let index = 0;
let typingInterval;

function type() {
  if (index <= name.length) {
    document.getElementById("typing").innerText = name.slice(0, index);
  } else if (index <= name.length + 2) {
    document.getElementById("typing").innerText = "";
  } else {
    document.getElementById("typing").innerText = role.slice(
      0,
      index - name.length - 3
    );
  }
  index++;

  if (index > name.length + role.length + 3) {
    clearInterval(typingInterval);
  }
}

typingInterval = setInterval(type, 100);
