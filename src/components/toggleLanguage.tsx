"use client";
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";
import React from "react";

export default function ToggleLanguage() {
  const { language, switchLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "En" ? "ع" : "En";
    switchLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      <p className="font-english">{language}</p>
      <Globe
        className="h-6 w-6 cursor-pointer hover:text-[#007AFF] transition-all hover:scale-105"
        onClick={toggleLanguage}
        aria-label="Toggle language"
      />
    </div>
  );
}
