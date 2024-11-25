"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animation";
import SectionHeader from "./sectionHeader";
import { useLanguage } from "@/context/language-context";
import { companiesText } from "@/lib/textShown";
import Image from "next/image";
import ensb from "../../public/img/gdsc-ensb.jpg";
import expo from "../../public/img/images.jpeg";
import stls from "../../public/img/slts.png";
import gah from "../../public/img/girls-at-harvard.jpg";
import wemi from "../../public/img/wemi.png";

export default function Companies() {
  const { language } = useLanguage();

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariants}
      viewport={{
        once: true,
      }}
      className="mt-8 w-full flex flex-col items-center space-y-8"
    >
      <SectionHeader
        text={
          language === "En"
            ? companiesText.heading.english
            : companiesText.heading.arabic
        }
      />
      <div className="w-full bg-slate-50 flex md:flex-row flex-col items-center gap-y-10 justify-between px-20 py-10">
        <Image alt="" src={expo} width={180} height={180} />
        <Image alt="" src={stls} width={180} height={180} />
        <Image alt="" src={gah} width={180} height={180} />
        <Image alt="" src={wemi} width={180} height={180} />
        <Image alt="" src={ensb} width={180} height={180} />
      </div>
    </motion.section>
  );
}
