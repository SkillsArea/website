"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animation";

type Props = {
  text: string;
};

export default function SectionHeader({ text }: Props) {
  return (
    <>
      <motion.h1
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        viewport={{
          once: true,
        }}
        className="text-6xl text-[#023477] text-center font-arabic font-extrabold"
      >
        {text}
      </motion.h1>
    </>
  );
}
