const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// Función para cambiar el tema
function toggleTheme() {
  const isDark = htmlElement.getAttribute("data-theme") === "dark";
  htmlElement.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
}

// Cargar tema guardado
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
htmlElement.setAttribute("data-theme", savedTheme);

// Evento click
themeToggle.addEventListener("click", toggleTheme);
