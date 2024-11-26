import { fadeInAnimationVariants } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import logo from "../../public/img/logo.png";
import { useLanguage } from "@/context/language-context";
import { links, NavBarLinks } from "@/lib/textShown";
import facebook from "../../public/img/facebook.png";
import telegram from "../../public/img/telegram.png";
import linkedin from "../../public/img/linkedin.png";
import whatsapp from "../../public/img/whatsapp.png";
import Link from "next/link";
import clsx from "clsx";
import { getText } from "@/lib/utils";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariants}
      viewport={{
        once: true,
      }}
      className="bg-[#023477] w-full flex flex-col md:flex-row justify-between items-center p-5 lg:px-10 md:py-10 text-white mt-[5rem]"
    >
      <Link href={"/"}>
        <Image
          width={500}
          height={500}
          alt=""
          src={logo}
          className="w-[200px] h-[200px] hover:scale-105 transition-all"
        />
      </Link>

      <div className="flex flex-col gap-2 items-center">
        <p className="text-3xl">{getText(links.contact, language)}</p>
        <div className="flex gap-x-2">
          <Link href={""}>
            {" "}
            <Image
              width={500}
              height={500}
              alt=""
              src={facebook}
              className="w-14 h-14 hover:translate-y-2 hover:opacity-60 transition-all"
            />
          </Link>
          <Link href={""}>
            {" "}
            <Image
              width={500}
              height={500}
              alt=""
              src={telegram}
              className="w-14 h-14 hover:translate-y-2 hover:opacity-60 transition-all"
            />
          </Link>
          <Link href={""}>
            {" "}
            <Image
              width={500}
              height={500}
              alt=""
              src={linkedin}
              className="w-14 h-14 hover:translate-y-2 hover:opacity-60 transition-all"
            />
          </Link>
          <Link href={""}>
            {" "}
            <Image
              width={500}
              height={500}
              alt=""
              src={whatsapp}
              className="w-14 h-14 hover:translate-y-2 hover:opacity-60 transition-all"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-lg">
        {NavBarLinks.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className={clsx(
              "hover:translate-x-2 hover:opacity-60 transition-all",
              { "text-right": language === "ع" }
            )}
          >
            {getText(link, language)}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
