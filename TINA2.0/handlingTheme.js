const parent = document.getElementById("loading-parent");

if (
  localStorage.darkMode === "true" ||
  (!("darkMode" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  parent.classList.add("dark");
} else {
  parent.classList.remove("dark");
}



