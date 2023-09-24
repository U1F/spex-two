async function updateClock() {
    const res = await fetch("http://localhost:8081/clock");
    const time = await res.text();
    document.getElementById("clock").innerText = time;
  }

  setInterval(updateClock, 1000);