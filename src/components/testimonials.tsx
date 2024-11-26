"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeader from "./sectionHeader";
import { testimonialsSection } from "@/lib/textShown";
import { useLanguage } from "@/context/language-context";
import clsx from "clsx";
import { fadeInAnimationVariants } from "@/lib/animation";
import { getText } from "@/lib/utils";

export function Testimonials() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariants}
      viewport={{
        once: true,
      }}
      className="w-full flex flex-col items-center mt-[5rem]"
    >
      <SectionHeader text={getText(testimonialsSection.heading, language)} />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-[5rem] max-w-6xl"
      >
        <CarouselContent>
          {testimonialsSection.testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div>
                <Card>
                  <CardContent
                    className={clsx(
                      "flex w-full aspect-square items-center justify-center p-6",
                      { "text-right": language === "ع" }
                    )}
                  >
                    <span className="text-3xl font-semibold">
                      {getText(testimonial, language)}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
}
