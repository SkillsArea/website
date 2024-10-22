"use client"
import { Globe } from "lucide-react";
import React, { useState } from "react";

export default function ToggleLanguage() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <>
      <p className="font-english">{toggle === false ? "En" : "ع"}</p>
      <Globe className="h-6 w-6 cursor-pointer hover:text-[#007AFF] transition-all hover:scale-105" onClick={handleToggle} />
    </>
  );
}
