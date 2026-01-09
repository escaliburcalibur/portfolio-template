// =====================
// PROJECT ROUTING
// =====================
const cards = document.querySelectorAll(".project-card");
const projects = document.querySelectorAll(".project");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const target = card.dataset.target;

    projects.forEach((p) => p.classList.remove("active"));
    document.getElementById(target).classList.add("active");

    ScrollTrigger.refresh();
  });
});

// =====================
// DARK MODE
// =====================
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
  document.body.classList.toggle("light", !e.target.checked);
});
