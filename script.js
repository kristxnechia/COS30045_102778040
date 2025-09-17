// Logo click -> Go to homepage
document.getElementById("logo").addEventListener("click", function() {
  window.location.href = "index.html";
});

// Highlight active link
const currentPage = window.location.pathname.split("/").pop();
if (currentPage.includes("index")) {
  document.getElementById("home-link").classList.add("active");
} else if (currentPage.includes("televisions")) {
  document.getElementById("tv-link").classList.add("active");
} else if (currentPage.includes("aboutus")) {
  document.getElementById("about-link").classList.add("active");
}

// Footer year auto-update
document.getElementById("year").textContent = new Date().getFullYear();
