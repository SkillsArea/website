"use client";
import Image from "next/image";
import React from "react";
import hero from "../../public/img/hero.png";
import { heroText } from "@/lib/textShown";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariantsDiv1,
  fadeInAnimationVariantsDiv2,
} from "@/lib/animation";
import clsx from "clsx";
import { useLanguage } from "@/context/language-context";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section
      className={clsx(
        "w-full flex md:flex-row flex-col gap-0 my-12 px-14 items-center",
        {
          "md:flex-row-reverse": language === "En",
        }
      )}
    >
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
        className={clsx("flex flex-col w-full lg-[40%] items-start", {
          "!items-end": language === "ع",
        })}
      >
        <p
          className={clsx(
            "text-[#007AFF] md:text-[6rem] text-[3rem] font-extrabold mb-6 text-shadow-default",
            { "!text-[1.9rem] !md:text-[4.6rem]": language === "En" }
          )}
        >
          {language === "En" ? heroText.main.english : heroText.main.arabic}
        </p>
        <p className="text-[#023477] text-xl mb-4">
          {language === "En"
            ? heroText.feature1.english
            : heroText.feature1.arabic}
        </p>
        <p className="text-[#023477] text-xl mb-8">
          {language === "En"
            ? heroText.feature2.english
            : heroText.feature2.arabic}
        </p>
        <Button
          className={clsx(
            "!rounded-full bg-[#007AFF] font-arabic text-xl font-extrabold hover:bg-[#023477] drop-shadow-2xl shadow-black w-[10rem]",
            { "!text-sm !w-[6rem]": language === "En" }
          )}
        >
          {language === "En" ? heroText.button.english : heroText.button.arabic}
        </Button>
      </motion.div>
    </section>
  );
}
