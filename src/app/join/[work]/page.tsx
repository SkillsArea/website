"use client";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { form, workshopsPgae } from "@/lib/textShown";
import { useLanguage } from "@/context/language-context";
import clsx from "clsx";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/sectionHeader";
import { notFound } from "next/navigation";
import { getText } from "@/lib/utils";

type Props = {
  params: Promise<{
    work: string;
  }>;
};

export default function Page({ params }: Props) {
  const { language } = useLanguage();
  const [banner, setBanner] = useState("");
  const { work } = use(params);

  useEffect(() => {
    const workshopNames = workshopsPgae.workshops.map((workshop) => workshop.name);
    if (workshopNames.includes(work)) {
      setBanner(work);
    } else {
      notFound();
    }
  }, [work]);

  return (
    <div className={language === "En" ? "font-english" : "font-arabic"}>
      <NavBar />
      <motion.div
        className="px-5 md:px-[8rem] mt-16 mb-8"
        initial="initial"
        whileInView="animate"
        variants={fadeInAnimationVariants}
        viewport={{
          once: true,
        }}
      >
        <SectionHeader text={banner} />
        <Card className="bg-slate-50 mt-8">
          <CardHeader
            className={clsx("flex flex-col gap-2 mb-6", {
              "items-end": language === "ع",
            })}
          >
            <CardTitle className="text-3xl font-bold">
              {getText(form.title, language)}
            </CardTitle>
            <CardDescription className="text-foreground font-bold mb">
              {getText(form.description, language)}
            </CardDescription>
          </CardHeader>
          <CardContent
            className={clsx("flex flex-col gap-2 mb-6", {
              "items-end": language === "ع",
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
                  {getText(form.formDetails.Name, language)}
                </p>
                <input
                  type="text"
                  className={clsx(
                    "w-[20rem] md:w-[40rem] h-[2.5rem] rounded-xl p-3",
                    {
                      "text-right": language === "ع",
                    }
                  )}
                  placeholder={getText(form.formDetails.placeholderName, language)}
                  aria-label={getText(form.formDetails.Name, language)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p
                  className={clsx("font-bold", {
                    "text-right": language === "ع",
                  })}
                >
                  {getText(form.formDetails.pN, language)}
                </p>
                <input
                  type="number"
                  className={clsx("w-[20rem] h-[2.5rem] rounded-xl p-3", {
                    "text-right": language === "ع",
                  })}
                  placeholder="+20"
                  aria-label={getText(form.formDetails.pN, language)}
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
                  {getText(form.formDetails.email, language)}
                </p>
                <input
                  type="text"
                  className={clsx(
                    "w-[20rem] md:w-[40rem] h-[2.5rem] rounded-xl p-3",
                    {
                      "text-right": language === "ع",
                    }
                  )}
                  placeholder="example@euro.xyz"
                  aria-label={getText(form.formDetails.email, language)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p
                  className={clsx("font-bold", {
                    "text-right": language === "ع",
                  })}
                >
                  {getText(form.formDetails.age, language)}
                </p>
                <input
                  type="number"
                  className={clsx("w-[20rem] h-[2.5rem] rounded-xl p-3", {
                    "text-right": language === "ع",
                  })}
                  placeholder="20"
                  aria-label={getText(form.formDetails.age, language)}
                />
              </div>
            </div>
            <div>
              <Button
                className={clsx(
                  "!rounded-full bg-[#007AFF] font-arabic mt-3 text-xl font-extrabold hover:bg-[#023477] drop-shadow-2xl shadow-black w-[10rem]",
                  { "!text-sm !w-[6rem]": language === "En" }
                )}
              >
                {getText(workshopsPgae.button, language)}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <Footer />
    </div>
  );
}
