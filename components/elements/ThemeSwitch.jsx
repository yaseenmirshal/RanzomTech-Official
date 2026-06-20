"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [togglETHeme, setTogglETHeme] = useState("light-theme");

  useEffect(() => {
    const savedTheme = localStorage.getItem("togglETHeme");
    if (savedTheme) {
      setTogglETHeme(savedTheme); // ✅ no JSON.parse
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("togglETHeme", togglETHeme); // ✅ no JSON.stringify

    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(togglETHeme);
  }, [togglETHeme]);

  const handleToggleTheme = () => {
    setTogglETHeme((prev) =>
      prev === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  return (
    <nav
      className="switcher__tab"
      onClick={handleToggleTheme}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 99999,
        cursor: "pointer",
      }}
    >
      <span className="switcher__btn light-mode">☀️</span>
      <span className="switcher__mode" />
      <span className="switcher__btn dark-mode">🌙</span>
    </nav>
  );
}
