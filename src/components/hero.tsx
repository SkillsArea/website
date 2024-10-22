"use client"
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

export default function Hero() {
  return (
    <section className="w-full flex gap-0 mt-12 px-10 items-center">
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
        className="flex flex-col items-end w-full lg-[40%]"
      >
        <p className="text-right text-[#007AFF] text-[6rem] font-extrabold mb-6">
          {heroText.arabic}
        </p>
        <p className="text-[#023477] text-xl text-right mb-4">
          أول منظمة تساعد على توفير منتجات تعليمية مجانية ممتعة✅
        </p>
        <p className="text-[#023477] text-xl text-right mb-8">
          للشباب من سن 11 سنة لفوق 25 سنة في مجالات التكنولوجيا و تطوير الذات ✅
        </p>
        <Button className="!rounded-full bg-[#007AFF] font-arabic text-xl font-extrabold hover:bg-[#023477] drop-shadow-2xl shadow-black w-[8rem]">
          سحل في الورش
        </Button>
      </motion.div>
    </section>
  );
}
