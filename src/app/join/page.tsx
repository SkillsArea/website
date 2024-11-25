"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { form } from "@/lib/textShown";
import { useLanguage } from "@/context/language-context";
import clsx from "clsx";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

export default function Page() {
  const { language } = useLanguage();

  return (
    <div className={language === "En" ? "font-english" : "font-arabic"}>
      <NavBar />
      <motion.div
        className="px-5 md:px-[8rem] mt-16"
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        viewport={{
          once: true,
        }}
      >
        <Card className="bg-slate-50">
          <CardHeader
            className={clsx("flex flex-col gap-2 mb-6", {
              " items-end": language === "ع",
            })}
          >
            <CardTitle className="text-3xl font-bold">
              {language === "En" ? form.title.english : form.title.arabic}
            </CardTitle>
            <CardDescription className="text-foreground font-bold mb">
              {language === "En"
                ? form.description.english
                : form.description.arabic}
            </CardDescription>
          </CardHeader>
          <CardContent
            className={clsx("flex flex-col gap-2 mb-6", {
              " items-end": language === "ع",
            })}
          >
            <div
              className={clsx("flex flex-col md:flex-row gap-4", {
                "md:flex-row-reverse": language === "ع",
              })}
            >
              <div className="flex flex-col gap-1">
                <p
                  className={clsx("font-bold", {
                    "text-right": language === "ع",
                  })}
                >
                  {language === "En"
                    ? form.formDetails.Name.english
                    : form.formDetails.Name.arabic}
                </p>
                <input
                  type="text"
                  className={clsx("w-[40rem] h-[2.5rem] rounded-xl p-3", {
                    "text-right": language === "ع",
                  })}
                  placeholder={
                    language === "En"
                      ? form.formDetails.placeholderName.english
                      : form.formDetails.placeholderName.arabic
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <p
                  className={clsx("font-bold", {
                    "text-right": language === "ع",
                  })}
                >
                  {language === "En"
                    ? form.formDetails.pN.english
                    : form.formDetails.pN.arabic}
                </p>
                <input
                  type="number"
                  className={clsx("w-[20rem] h-[2.5rem] rounded-xl p-3", {
                    "text-right": language === "ع",
                  })}
                  placeholder="+20"
                />
              </div>
            </div>
            <div
              className={clsx("flex flex-col md:flex-row gap-4", {
                "md:flex-row-reverse": language === "ع",
              })}
            >
              <div className="flex flex-col gap-1">
                <p
                  className={clsx("font-bold", {
                    "text-right": language === "ع",
                  })}
                >
                  {language === "En"
                    ? form.formDetails.email.english
                    : form.formDetails.email.arabic}
                </p>
                <input
                  type="text"
                  className={clsx("w-[40rem] h-[2.5rem] rounded-xl p-3", {
                    "text-right": language === "ع",
                  })}
                  placeholder="example@euro.xyz"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p
                  className={clsx("font-bold", {
                    "text-right": language === "ع",
                  })}
                >
                  {language === "En"
                    ? form.formDetails.age.english
                    : form.formDetails.age.arabic}
                </p>
                <input
                  type="number"
                  className={clsx("w-[20rem] h-[2.5rem] rounded-xl p-3", {
                    "text-right": language === "ع",
                  })}
                  placeholder="20"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <Footer />
    </div>
  );
}
