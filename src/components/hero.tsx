"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import hero from "../../public/img/hero.png";
import { heroText } from "@/lib/textShown";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariantsDiv1,
  fadeInAnimationVariantsDiv2,
} from "@/lib/animation";
import clsx from "clsx";

export default function Hero() {
  const [lang, setLang] = useState("arabic");
  useEffect(() => {
    const Language = sessionStorage.getItem("Lang");

    if (Language) {
      setLang(Language);
    }
  });
  return (
    <section className={clsx(
      "w-full flex gap-0 mt-12 px-14 items-center",
      {
        "flex-row-reverse": lang === "english",
      }
    )}>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariantsDiv1}
        viewport={{
          once: true,
        }}
        className="w-full lg:w-[60%]"
      >
        <Image src={hero} alt="" width={1000} height={300} />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariantsDiv2}
        viewport={{
          once: true,
        }}
        className={clsx("flex flex-col w-full lg-[40%]", {"items-end" : lang === "arabic"})}
      >
        <p className={clsx("text-[#007AFF] text-[6rem] font-extrabold mb-6" , {"text-[4rem]" : lang === "english"})}>
          {lang === "english" ? heroText.main.english : heroText.main.arabic}
        </p>
        <p className="text-[#023477] text-xl mb-4">
          {lang === "english"
            ? heroText.feature1.english
            : heroText.feature1.arabic}
        </p>
        <p className="text-[#023477] text-xl mb-8">
          {lang === "english"
            ? heroText.feature2.english
            : heroText.feature2.arabic}
        </p>
        <Button className={clsx("!rounded-full bg-[#007AFF] font-arabic text-xl font-extrabold hover:bg-[#023477] drop-shadow-2xl shadow-black w-[8rem]", {"!text-sm" : lang === "english"})}>
          {lang === "english"
            ? heroText.button.english
            : heroText.button.arabic}
        </Button>
      </motion.div>
    </section>
  );
}
