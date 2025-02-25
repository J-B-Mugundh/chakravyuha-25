'use client';

import { useEffect } from 'react';

// @project
import { Feature20 } from '@/blocks/feature';
import { AboutMIT } from '@/blocks/feature/AboutMIT';
import { AboutChakraVyuha } from '@/blocks/feature/AboutChakraVyuha';
import { Hero17 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import {
  benefit,
  clientele,
  cta4,
  cta5,
  faq,
  feature20,
  feature21,
  feature18,
  hero,
  integration,
  other,
  pricing
} from './data';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  useDataThemeMode();

  useEffect(() => {
    window.history.replaceState(null, '', '/');
  }, []);

  return (
    <>
      <div id="home"></div>
        <Hero17 {...hero} />

      <div id="about"></div>
        <AboutMIT />

      <AboutChakraVyuha />
      
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/benefit').then((module) => ({ default: module.Benefit5 })), props: benefit }
        ]}
        offset="200px"
      />
        
      <div id="events"></div>  
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/other').then((module) => ({ default: module.Other1 })), props: other }
        ]}
        offset="200px"
      />

      <div id="clubs"></div>  
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature18 })), props: feature18 },
        ]}
        offset="200px"
      />

      <div id="sponsors"></div>  
      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/integration').then((module) => ({ default: module.Integration2 })), props: integration },
          { importFunc: () => import('@/blocks/pricing').then((module) => ({ default: module.Pricing9 })), props: pricing }
        ]}
        offset="200px"
      />

      {/* <LazySection
        sections={[
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
        ]}
        offset="200px"
      /> */}

      {/* Add id="contact" for navigation at the end */}
      <div id="contact"></div>
    </>
  );
}