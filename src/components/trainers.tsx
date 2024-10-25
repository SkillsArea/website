"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./sectionHeader";
import { trainersText } from "@/lib/textShown";
import EngineerCards from "./engineerCards";

export default function Trainers() {
  const [lang, setLang] = useState("arabic");
  useEffect(() => {
    const Language = sessionStorage.getItem("Lang");

    if (Language) {
      setLang(Language);
    }
  });
  return (
    <section className="w-full flex flex-col items-center gap-3">
      <SectionHeader
        text={
          lang === "english"
            ? trainersText.heading.english
            : trainersText.heading.arabic
        }
      />
      <div className="w-full overflow-hidden">
        <EngineerCards />
      </div>
    </section>
  );
}
