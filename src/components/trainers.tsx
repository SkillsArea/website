"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./sectionHeader";
import { trainersText } from "@/lib/textShown";
import EngineerCard from "./engineerCard";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animation";

export default function Trainers() {
  const [lang, setLang] = useState("arabic");
  useEffect(() => {
    const Language = sessionStorage.getItem("Lang");

    if (Language) {
      setLang(Language);
    }
  });
  return (
    <section className="flex flex-col items-center gap-3">
      <SectionHeader
        text={
          lang === "english"
            ? trainersText.heading.english
            : trainersText.heading.arabic
        }
      />
      <div className="container mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariants}
          viewport={{
            once: true,
          }}
          className="lg:flex-row flex flex-col justify-center space-x-4"
        >
          {trainersText.trainers.map((engineer, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1 }}
              animate={{ scale: engineer.scale }}
              transition={{ duration: 0.5 }}
            >
              <EngineerCard
                name={engineer.name}
                description={engineer.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
