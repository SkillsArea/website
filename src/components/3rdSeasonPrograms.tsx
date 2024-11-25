"use client";
import Image from "next/image";
import React from "react";
import results from "../../public/img/bg.png";
import { Rd3SeasonProgram } from "@/lib/textShown";
import clsx from "clsx";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariants,
  fadeInAnimationVariantsDiv1,
  fadeInAnimationVariantsDiv2,
} from "@/lib/animation";

export default function Rd3SeasonPrograms() {
  const { language } = useLanguage();

  return (
    <div>
      <motion.div
        id="Programs"
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        viewport={{
          once: true,
        }}
        className="relative w-full mt-16"
      >
        <Image
          alt=""
          src={results}
          width={1407}
          height={295}
          className="w-full"
        />
        <div className="w-full absolute top-1/3 flex flex-col justify-between items-center font-bold text-[#023477] text-xl md:text-6xl">
          <div className="text-center">
            <p>برامج الموسم الثالث</p>
          </div>
        </div>
      </motion.div>

      <div className="w-full flex flex-col space-y-8 lg:space-y-12 items-center px-5 lg:px-10 mt-16 text-[#007AFF] text-[2rem]">
        {Rd3SeasonProgram.map((program, index) => (
          <div
            key={index}
            className={clsx(
              "w-full flex flex-col space-y-8 lg:flex-row lg:gap-x-10 items-center",
              {
                "lg:flex-row-reverse": index % 2 === 0,
              },
              { "text-end font-arabic": language === "ع" }
            )}
          >
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={
                index % 2 === 0
                  ? fadeInAnimationVariantsDiv2
                  : fadeInAnimationVariantsDiv1
              }
              viewport={{
                once: true,
              }}
              className="lg:w-[50%] w-full flex-col space-y-4"
            >
              <div
                className={clsx("w-full flex gap-4 items-center", {
                  "font-arabic flex-row-reverse": language === "ع",
                })}
              >
                <Image
                  alt=""
                  src={program.images.trainer}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="!text-[#023477] font-extrabold !text-[3rem]">
                  {language === "En"
                    ? program.texts.heading.english
                    : program.texts.heading.arabic}
                </p>
              </div>
              <p>
                {language === "En"
                  ? program.texts.legend.english
                  : program.texts.legend.arabic}
              </p>
              <p>
                {language === "En"
                  ? program.texts.descreption.english
                  : program.texts.descreption.arabic}
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={
                index % 2 === 0
                  ? fadeInAnimationVariantsDiv1
                  : fadeInAnimationVariantsDiv2
              }
              viewport={{
                once: true,
              }}
              className="lg:w-[50%] w-full"
            >
              <Image
                src={program.images.banner}
                alt={`Image`}
                className="rounded-xl w-full h-full"
                width={1280}
                height={1073}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
