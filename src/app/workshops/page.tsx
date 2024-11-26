"use client";
import React from "react";
import { motion } from "framer-motion";
import { workshopsPgae } from "@/lib/textShown";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import clsx from "clsx";
import Link from "next/link";
import { website } from "@/lib/constants";
import { getText } from "@/lib/utils";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Page() {
  const { language } = useLanguage();
  return (
    <div className={language === "En" ? "font-english" : "font-arabic"}>
      <NavBar />
      <section
        className={clsx("w-full px-5 md:px-20 flex gap-5 flex-warp mt-8", {
          "flex-row-reverse": language === "ع",
        })}
      >
        {workshopsPgae.workshops.map((workshop, index) => (
          <motion.div
            className="m-0 p-0"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            key={index}
            custom={index}
          >
            <Card className="p-0 w-[430px] h-[600px] flex flex-col gap-y-5 text-[#023477]">
              <Image
                alt=""
                src={workshop.banner}
                width={1280}
                height={1073}
                className=" rounded-t-xl w-[426.6px] h-[357.6px]"
              />
              <div
                className={clsx("w-full flex flex-col gap-y-2 px-3", {
                  "items-end": language === "ع",
                })}
              >
                <div
                  className={clsx("flex gap-2", {
                    "flex-row-reverse": language === "ع",
                  })}
                >
                  <p className="font-bold">
                    {getText(workshopsPgae.deadline, language)}
                  </p>
                  <p>{getText(workshop.deadline, language)}</p>
                </div>
                <div
                  className={clsx("flex gap-2", {
                    "flex-row-reverse": language === "ع",
                  })}
                >
                  <p className="font-bold">
                    {getText(workshopsPgae.cost, language)}
                  </p>
                  <p>{getText(workshop.cost, language)}</p>
                </div>
                <div
                  className={clsx("flex gap-2", {
                    "flex-row-reverse": language === "ع",
                  })}
                >
                  <p className="font-bold">
                    {getText(workshopsPgae.features, language)}
                  </p>
                  <p>{getText(workshop.features, language)}</p>
                </div>
                <div
                  className={clsx("flex gap-2", {
                    "flex-row-reverse": language === "ع",
                  })}
                >
                  <p className="font-bold">
                    {getText(workshopsPgae.location, language)}
                  </p>
                  <p>{getText(workshop.location, language)}</p>
                </div>
              </div>
              <div className="w-full flex flex-col items-center">
                <Link href={`${website}/join/${workshop.name}`}>
                  <Button
                    className={clsx(
                      "!rounded-full bg-[#007AFF] font-arabic text-xl font-extrabold hover:bg-[#023477] drop-shadow-2xl shadow-black w-[10rem]",
                      { "!text-sm !w-[6rem]": language === "En" }
                    )}
                  >
                    {getText(workshopsPgae.button, language)}
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
