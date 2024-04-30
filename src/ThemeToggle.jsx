import React from "react";
import { useGlobalContext } from "./Context";
import { MdDarkMode } from "react-icons/md";
import { GoSun } from "react-icons/go";

export default function ThemeToggle() {
  const { isDarkTheme, setIsDarkTheme } = useGlobalContext();
  function toggleDarkTheme() {
    setIsDarkTheme((prev) => {
      return !prev;
    });
  }

  return (
    <div className="theme-toggle-container">
      <button onClick={() => toggleDarkTheme()} className="theme-toggle-btn">
        {isDarkTheme ? <MdDarkMode color="#fff" /> : <GoSun />}
      </button>
    </div>
  );
}
