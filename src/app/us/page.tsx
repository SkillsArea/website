"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import { useLanguage } from "@/context/language-context";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import background from "../../../public/img/FullBg.png";
import { motion } from "framer-motion";
import logo from "../../../public/img/logoP.png";
import {
  fadeInAnimationVariants,
  fadeInAnimationVariantsDiv1,
  fadeInAnimationVariantsDiv2,
} from "@/lib/animation";
import { us } from "@/lib/textShown";
import { getText } from "@/lib/utils";

export default function Page() {
  const { language } = useLanguage();
  return (
    <div className={language === "En" ? "font-english" : "font-arabic"}>
      <NavBar />
      <motion.div
        className="m-0 p-0"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <Image
          alt=""
          src={background}
          width={1407}
          height={295}
          className="w-full"
        />
      </motion.div>
      <section
        className={clsx(
          "w-full flex flex-col lg:flex-row gap-8 mb-8 px-5 lg:px-10 items-center",
          {
            "lg:flex-row-reverse": language === "En",
          }
        )}
      >
        <motion.div
          className={clsx({ "text-right": language === "ع" })}
          variants={
            language === "En"
              ? fadeInAnimationVariantsDiv2
              : fadeInAnimationVariantsDiv1
          }
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <h1 className="text-[6rem] font-extrabold text-[#007AFF] mb-4">
            {getText(us.heading, language)}
          </h1>
          <p className="text-[1.5rem] font-extrabold text-[#023477] mb-4">
            {getText(us.description, language)}
          </p>
        </motion.div>
        <motion.div
          className=""
          variants={
            language === "En"
              ? fadeInAnimationVariantsDiv1
              : fadeInAnimationVariantsDiv2
          }
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Image
            alt=""
            src={logo}
            height={2219}
            width={3313}
            className="h-[634px] w-[946.6px] rotate-12"
          />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
