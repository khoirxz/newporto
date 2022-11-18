import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <AppContext.Provider value={{ theme, setTheme, handleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
