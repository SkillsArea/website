import Hero from '@/components/hero';
import Trainers from '@/components/trainers';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "SkillArea",
  description: "Who are we acctualy ?",
};

export default function Home() {
  return <main>
    <Hero />
    <Trainers />
  </main>;
}
