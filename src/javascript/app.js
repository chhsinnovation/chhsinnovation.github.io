export const toggleIt = () => {
  var element = document.getElementById("menu");
  element.classList.toggle("hidden");
  var element2 = document.getElementById("menu-link-text");
  element2.classList.toggle("hidden");
  var element3 = document.getElementById("menu-link-close-text");
  element3.classList.toggle("hidden");
}
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById('menu-link').onclick = toggleIt;
});