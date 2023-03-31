import { useSelector } from "react-redux";
import { useEffect } from "react";

function useThemeChange() {
  const theme = useSelector((state: any) => state.theme.darkMode);

  useEffect(() => {
    console.log("theme changed");

    localStorage.setItem("darkMode", theme.toString());

    if (theme) {
      if (!document.documentElement.classList.contains("dark"))
        document.documentElement.classList.add("dark");
    } else {
      if (document.documentElement.classList.contains("dark"))
        document.documentElement.classList.remove("dark");
    }
  }, [theme]);
}

export default useThemeChange;
