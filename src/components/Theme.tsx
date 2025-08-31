import { useState, useEffect, useContext, createContext } from "react";

const ThemeContext = createContext("light");
const Theme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
      className="w-3/4 mx-auto mt-10 border-[1px] text-xl py-16 flex flex-col gap-y-10 justify-center items-center"
    >
      <ThemeContext value={theme}>
        <button
          className={`${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          } border-[1px] py-1.5 px-2 rounded-lg cursor-pointer`}
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        >
          Toggle theme
        </button>
        <Header />
      </ThemeContext>
    </div>
  );
};

export default Theme;

const Header = () => {
  return (
    <>
      <Button />
    </>
  );
};

const Button = () => {
  const theme = useContext(ThemeContext);
  return (
    <button
      className={`${
        theme === "light" ? "bg-black text-white" : "bg-white text-black"
      } border-[1px] py-1.5 px-2 rounded-lg cursor-pointer`}
    >
      {theme}
    </button>
  );
};
