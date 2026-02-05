const h1 = document.querySelector("h1");
document.body.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;
  const w = window.innerWidth;
  const h = window.innerHeight;

  h1.textContent = `${x}, ${y}`;
  const red = (x / w) * 100;
  const green = (y / h) * 100;
  const blue = (x / w) * 100 + ((y / h) * 100) / 2;
  document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
});
