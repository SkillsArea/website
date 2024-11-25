"use client";
import React from "react";
import NavBar from "./navBar";
import Hero from "./hero";
import Trainers from "./trainers";
import { useLanguage } from "@/context/language-context";
import Companies from "./companies";
import Rd3SeasonPrograms from "./3rdSeasonPrograms";
import { Testimonials } from "./testimonials";
import Footer from "./footer";

export default function Page() {
  const { language } = useLanguage();

  return (
    <div className={language === "En" ? "font-english" : "font-arabic"}>
      <NavBar />
      <Hero />
      <Trainers />
      <Companies />
      <Rd3SeasonPrograms />
      <Testimonials />
      <Footer />
    </div>
  );
}
