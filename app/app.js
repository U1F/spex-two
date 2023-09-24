async function updateClock() {
  const res = await fetch("http://localhost:8081/clock");
  const time = await res.text();
  document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const app = document.getElementById("app");

burger.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    app.style.display = "none";
  } else {
    menu.style.display = "none";
    app.style.display = "flex";
  }
});