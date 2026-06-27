document.addEventListener("DOMContentLoaded", () => {

  window.scrollToSection = function(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  window.switchTab = function(tabId, el) {
    document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    document.getElementById(tabId)?.classList.add("active");
    el?.classList.add("active");
  };

  window.calculateROI = function() {
    const fuel = Number(document.getElementById("fuelSpend")?.value || 0);
    const savings = fuel * 0.23 * 12;
    document.getElementById("roiResult").innerText =
      "Estimated Annual Savings: R " + savings.toLocaleString();
  };

  const toggle = document.getElementById("themeToggle");
  const menu = document.getElementById("themeMenu");

  toggle?.addEventListener("click", e => {
    e.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  window.setTheme = function(theme) {
    document.body.className = `theme-${theme}`;
    menu.style.display = "none";
  };

  document.addEventListener("click", () => menu.style.display = "none");

  const observer = new IntersectionObserver(entries =>
    entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});