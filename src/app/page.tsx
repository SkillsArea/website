import Hero from '@/components/hero';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "SkillArea",
  description: "Who are we acctualy ?",
};

export default function Home() {
  return <main>
    <Hero />
  </main>;
}
