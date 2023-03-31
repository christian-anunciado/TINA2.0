const parent = document.body;

if (
  localStorage.darkMode === "true" ||
  (!("darkMode" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  if (!parent.classList.contains("dark"))
    parent.classList.add("dark");
} else {
  if (parent.classList.contains("dark"))
    parent.classList.remove("dark");
}



