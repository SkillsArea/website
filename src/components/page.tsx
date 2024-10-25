"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./navBar";
import Hero from "./hero";
import Trainers from "./trainers";

export default function Page() {
  const [fontClass, setFontClass] = useState("");

  useEffect(() => {
    // Check the language from sessionStorage
    const lang = sessionStorage.getItem("Lang");
    if (lang === "english") {
      setFontClass("font-english");
    } else if (lang === "arabic") {
      setFontClass("font-arabic");
    }
  }, []);
  return <div className={fontClass}>
        <NavBar />
        <Hero />
        <Trainers />
    </div>;
}
