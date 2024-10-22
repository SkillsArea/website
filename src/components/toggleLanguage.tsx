"use client";
import { ARABIC, ENGLISH } from "@/lib/constants";
import { Globe } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ToggleLanguage() {
  const [toggle, setToggle] = useState(ENGLISH);

  useEffect(() => {
    const lang = sessionStorage.getItem("Lang") || "english";
    setToggle(lang === "arabic" ? ARABIC : ENGLISH);
  }, []); // Run only on initial load

  const handleToggle = () => {
    const newLang = toggle === ENGLISH ? "arabic" : "english";
    setToggle(newLang === "arabic" ? ARABIC : ENGLISH);
    sessionStorage.setItem("Lang", newLang);
    window.location.reload();
  };

  return (
    <div className="flex items-center space-x-2">
      <p className="font-english">{toggle}</p>
      <Globe
        className="h-6 w-6 cursor-pointer hover:text-[#007AFF] transition-all hover:scale-105"
        onClick={handleToggle}
        aria-label="Toggle language"
      />
    </div>
  );
}
