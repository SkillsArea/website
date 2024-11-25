"use client";
import React from "react";
import SectionHeader from "./sectionHeader";
import { trainersText } from "@/lib/textShown";
import EngineerCards from "./engineerCards";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animation";
import Results from "./results";

export default function Trainers() {
  const { language } = useLanguage();

  return (
    <section className="w-full flex flex-col items-center gap-3" id="trainers">
      <SectionHeader
        text={
          language === "En"
            ? trainersText.heading.english
            : trainersText.heading.arabic
        }
      />
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        viewport={{
          once: true,
        }}
        className="w-full overflow-hidden"
      >
        <EngineerCards />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        viewport={{
          once: true,
        }}
        className="w-full flex flex-col items-center mt-4"
      >
        <Results />
      </motion.div>
    </section>
  );
}
