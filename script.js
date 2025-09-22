const socialEl = document.getElementById("socialEl");
const flashEl = document.getElementById("flashEl");
const listEl = document.getElementById("listEl");
const FacebookEl = document.getElementById("FacebookEl");
const YouTubeEl = document.getElementById("YouTubeEl");
const TwitterEl = document.getElementById("TwitterEl");
const LinkedinEl = document.getElementById("LinkedinEl");

const textSocial = document.getElementById("textSocial");

socialEl.addEventListener("click", () => {
  listEl.classList.toggle("showhidden");
  flashEl.classList.toggle("routete");
});
FacebookEl.addEventListener("click", () => {
  socialEl.classList.remove("social");
  textSocial.innerHTML = FacebookEl.innerHTML;
  listEl.classList.add("showhidden");
});
YouTubeEl.addEventListener("click", () => {
  socialEl.classList.remove("social");
  textSocial.innerHTML = YouTubeEl.innerHTML;
  listEl.classList.add("showhidden");
});
TwitterEl.addEventListener("click", () => {
  socialEl.classList.remove("social");
  textSocial.innerHTML = TwitterEl.innerHTML;
  listEl.classList.add("showhidden");
});
LinkedinEl.addEventListener("click", () => {
  socialEl.classList.remove("social");
  textSocial.innerHTML = LinkedinEl.innerHTML;
  listEl.classList.add("showhidden");
});
