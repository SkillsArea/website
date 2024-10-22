'use client'
import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { joinHeaderButton, NavBarLinks } from "@/lib/textShown";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import Link from "next/link";
import ToggleLanguage from "./toggleLanguage";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animation";

export default function NavBar() {
  return (
    <motion.div 
    initial="initial"
    whileInView="animate"
    variants={fadeInAnimationVariants}
    viewport={{
      once: true,
    }}
    className="w-full flex flex-col items-center py-5 drop-shadow-2xl shadow-black">
      <Card className="w-[95%] md:w-[80%] flex mt-4 justify-between p-0 items-center">
        <div className="flex gap-x-6 items-center px-4 py-4">
          <div className="flex gap-x-1 text-[#023477] font-extrabold text-2xl items-center">
            <ToggleLanguage />
          </div>

          <Button className="!rounded-full bg-[#007AFF] font-arabic text-xl hover:bg-[#023477] drop-shadow-2xl shadow-black">
            {joinHeaderButton.arabic}
          </Button>
        </div>
        <div className="flex items-center gap-x-9">
          <div className="gap-8 text-2xl text-[#007AFF] hidden md:flex">
            {NavBarLinks.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="hover:text-[#023477] transition-all font-arabic font-extrabold hover:scale-105 text-nowrap"
              >
                {link.arabic}
              </Link>
            ))}
          </div>
          <Link
            href={"/"}
            className="drop-shadow-2xl shadow-black hover:scale-110 transition-all"
          >
            <Image src={logo} alt="" width={80} height={70} quality={90} />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
