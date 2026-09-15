const themeToggle = document.querySelector(".theme-toggle");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return document.documentElement.dataset.theme ||
    (systemTheme.matches ? "dark" : "light");
}

function updateThemeToggle() {
  const isDark = currentTheme() === "dark";
  themeToggle.querySelector("span").textContent = isDark ? "☀︎" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

themeToggle.addEventListener("click", () => {
  const nextTheme = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeToggle();
});

systemTheme.addEventListener("change", updateThemeToggle);
updateThemeToggle();
