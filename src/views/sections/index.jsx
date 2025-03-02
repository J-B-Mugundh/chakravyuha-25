'use client';
import { useEffect, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SectionHero from '@/components/SectionHero';
import SvgIcon from '@/components/SvgIcon';

import useFocusWithin from '@/hooks/useFocusWithin';
// import { PAGE_PATH } from '@/path';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import GetImagePath from '@/utils/GetImagePath';

// @assets
import Background from '@/images/graphics/Background';
import Wave from '@/images/graphics/Wave';

var SectionCategory;

(function (SectionCategory) {
  SectionCategory['Coding'] = 'Coding';
  SectionCategory['Robotics'] = 'Robotics';
  SectionCategory['Debates'] = 'Debates';
  SectionCategory['Iot'] = 'Iot';
  SectionCategory['Workshop'] = 'Workshop';
  SectionCategory['Fun'] = 'Fun';
})(SectionCategory || (SectionCategory = {}));

const imagePrefix = '/assets/images/presentation';

/***************************  SECTIONS - DATA  ***************************/

const sections = [
  {
    title: 'Street Coding ',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    club:'Club: CSMIT',
    image: `${imagePrefix}/navbar-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'OSPC',
    subTitle: 'Time: Mar 8th&9th      venue: IT Lab',
    club:'Club: CSMIT',
    image: `${imagePrefix}/hero-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'Bug Hunt',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    club:'Club: CSMIT',
    image: `${imagePrefix}/clientele-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'My Sequel ',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    club:'Club: CSMIT',
    image: `${imagePrefix}/benefits-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'Sight on Site',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    club:'Club: CSMIT',
    image: `${imagePrefix}/feature-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'Tech Connector',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    club:'Club: CSMIT',
    image: `${imagePrefix}/process-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'Code Noobies',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    club:'Club: CSMIT',
    image: `${imagePrefix}/integration-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'Cracking job tests and interviews',
    subTitle: 'Time: Mar 8th 9.30am - 3.30pm      venue: Admin Block Lab 3',
    club:'Club: CSMIT',
    image: `${imagePrefix}/integration-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'Mobile App Development',
    subTitle: 'Time: Mar 8th   9.30am - 3.30pm      venue: Admin Block Lab 2',
    club:'Club: CSMIT',
    image: `${imagePrefix}/integration-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'Unleashing product mangement',
    subTitle: 'Time: Mar 8th   9.30am - 3.30pm  venue: Admin Block Lab 1',
    club:'Club: CSMIT',
    image: `${imagePrefix}/integration-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'Backend Development with Docker',
    subTitle: 'Time: Mar 9th 9.30am - 3.30pm      venue: Admin Block Lab 2',
    club:'Club: CSMIT',
    image: `${imagePrefix}/integration-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'hackthon - 8 hrs',
    subTitle: 'Time: Mar 9th 9.30am - 3.30pm      venue: Admin Block Lab 1&3',
    club:'Club: CSMIT',
    image: `${imagePrefix}/integration-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Workshop
  },
  {
    title: 'Syntax Skit',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    club:'Club: CSMIT',
    image: `${imagePrefix}/testimonial-light.svg`,
    link: 'https://clubs.mitindia.edu/csmit/carteblanche/#pricing',
    category: SectionCategory.Coding
  },
  {
    title: 'Line Follower',
    subTitle: 'Time: Mar 8th      venue: RLHC',
    club:'Club: MITRA',
    image: `${imagePrefix}/cta-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSclUqTKWDbmn1Di3XmdcvJQH23D5OTLHmVANmfo7i_rrBxBtg/viewform?usp=header',
    category: SectionCategory.Robotics
  },
  {
    title: 'Robotics Paper Presentation',
    subTitle: 'Time: Mar 8th      venue: RLHC',
    club:'Club: MITRA',
    image: `${imagePrefix}/cta-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdRAO86e1RcyDDNbt8hiz-pajiK03LnCsDFa-FphFX1mXo8pQ/viewform?usp=header',
    category: SectionCategory.Robotics
  },
  {
    title: 'Robo Rush',
    subTitle: 'Time: Mar 8th      venue: Old PT Hut',
    club:'Club: MITRA',
    image: `${imagePrefix}/blog-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdKAvF3hwUIqSbCruBcDJHCGdendNbHjwNxtwhKFi1uZRlh1w/viewform?usp=header',
    category: SectionCategory.Robotics
  },
  {
    title: 'Robo Soccer',
    subTitle: 'Time: Mar 8th      venue: Connect Point',
    club:'Club: MITRA',
    image: `${imagePrefix}/faqs-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSegXjmVYwS1UubpxuEh-sf3fyBXA332XbOm4YNyrNEkoBegcA/viewform?usp=header',
    category: SectionCategory.Robotics
  },
  {
    title: 'Robo War',
    subTitle: 'Time: Mar 8th      venue: Connect Point',
    club:'Club: MITRA',
    image: `${imagePrefix}/footer-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfns7_yz4KyJAOWlU0sZpm2VEIMh23N20rycj0JT3xI7yNpng/viewform?usp=header',
    category: SectionCategory.Robotics
  },
  {
    title: 'ROS Workshop',
    subTitle: 'Time: Mar 8th      venue: Connect Point',
    club:'Club: MITRA',
    image: `${imagePrefix}/footer-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScxxiUgHAqPIwMGZFXVvjdFWm0XQwA-Vjws-PkT9r8pWp758w/viewform?usp=header',
    category: SectionCategory.Workshop
  },
  {
    title: 'AI in Robotics Workshop',
    subTitle: 'Time: Mar 8th      venue: Connect Point',
    club:'Club: MITRA',
    image: `${imagePrefix}/footer-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScUsaB28xSNcjOspnAZZnDBFAv9cerQzOV8kRjTECrtSm4Vfg/viewform?usp=header',
    category: SectionCategory.Workshop
  },
  {
    title: 'CAD Workshop ',
    subTitle: 'Time: Mar 8th      venue: Connect Point',
    club:'Club: MITRA',
    image: `${imagePrefix}/footer-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScUsaB28xSNcjOspnAZZnDBFAv9cerQzOV8kRjTECrtSm4Vfg/viewform?usp=header',
    category: SectionCategory.Workshop
  },
  {
    title: '3D Printing Workshop',
    subTitle: 'Time: Mar 8th      venue: Connect Point',
    club:'Club: MITRA',
    image: `${imagePrefix}/footer-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdFtsiMMWQyToiE_Oi8dqfVKV-rz_bZFe4hfmUto8tXsUFVOA/viewform?usp=header',
    category: SectionCategory.Workshop
  },
  {
    title: 'QDebate',
    subTitle: 'Time: Mar 9th      venue: RLHC classroom ',
    club:'Club: QUANTuMIT',
    image: `${imagePrefix}/team-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.Debates
  },
  {
    title: 'QDebate - (Combo Offer)',
    subTitle: 'Time: Mar 9th      venue: RLHC classroom ',
    club:'Club: QUANTuMIT',
    image: `${imagePrefix}/team-light.svg`,
    link: 'https://forms.gle/pyKacA9tHo4BYrkU9',
    category: SectionCategory.Debates
  },
  {
    title: 'Introduction to Quantum Computing and Communication',
    subTitle: 'Time: Mar 9th      venue: RLHC classroom ',
    club:'Club: QUANTuMIT',
    image: `${imagePrefix}/team-light.svg`,
    link: 'https://forms.gle/pyKacA9tHo4BYrkU9',
    category: SectionCategory.Workshop
  },
  {
    title: 'Introduction to Quantum Computing and Communication - (Combo Offer)',
    subTitle: 'Time: Mar 9th      venue: RLHC classroom ',
    club:'Club: QUANTuMIT',
    image: `${imagePrefix}/team-light.svg`,
    link: 'https://forms.gle/pyKacA9tHo4BYrkU9',
    category: SectionCategory.Workshop
  },
  {
    title: 'Q-Frontier - Paper Presentation',
    subTitle: 'Time: Mar 9th      venue: RLHC classroom ',
    club:'Club: QUANTuMIT',
    image: `${imagePrefix}/team-light.svg`,
    link: 'https://forms.gle/qX9YCPwoe7mJUd7o7',
    category: SectionCategory.Workshop
  },
  {
    title: 'Reverse Engineer Jam (Web / App / Design) ',
    club:'Club: GDG',
    subTitle: 'Time: Mar 8th      venue: CB Lab',
    image: `${imagePrefix}/contact-us-light.svg`,
    link: 'https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/',
    category: SectionCategory.Coding
  },
  {
    title: 'Tech Cipher Hunt',
    subTitle: 'Time: Mar 8th      venue: LHC / RLHC / CT Dept',
    club:'Club: GDG',
    image: `${imagePrefix}/gallery-light.svg`,
    link: 'https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/',
    category: SectionCategory.Coding
  },
  {
    title: 'hack & Seek',
    subTitle: 'Time: Mar 8th      venue: LHC / RLHC / CT Dept',
    club:'Club: GDG',
    image: `${imagePrefix}/gallery-light.svg`,
    link: 'https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/',
    category: SectionCategory.Coding
  },
  {
    title: 'Machine Learning in Action: Code, Build, Deploy',
    subTitle: 'Time: Mar 8th      venue: LHC / RLHC / CT Dept',
    club:'Club: GDG',
    image: `${imagePrefix}/gallery-light.svg`,
    link: 'https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/',
    category: SectionCategory.Workshop
  },
  {
    title: 'Full Stack Web Development',
    subTitle: 'Time: Mar 8th      venue: LHC / RLHC / CT Dept',
    club:'Club: GDG',
    image: `${imagePrefix}/gallery-light.svg`,
    link: 'https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/',
    category: SectionCategory.Coding
  },
  {
    title: 'Build Gen AI Apps with Gemini: Hands On',
    subTitle: 'Time: Mar 8th      venue: LHC / RLHC / CT Dept',
    club:'Club: GDG',
    image: `${imagePrefix}/gallery-light.svg`,
    link: 'https://gdg.community.dev/gdg-on-campus-madras-institute-of-technology-chennai-india/',
    category: SectionCategory.Coding
  },
  {
    title: 'Mission planer software Workshop',
    subTitle: 'Time: Mar 8th      venue: ALHC/RLHC ,OAT',
    club:'Club: Raptors',
    image: `${imagePrefix}/sign-in-light.svg`,
    link: 'https://forms.gle/PBibmrkgER42rLKY9',
    category: SectionCategory.Workshop
  },
  {
    title: 'UAV Innovatiob hub',
    subTitle: 'Time: Mar 8th      venue: ALHC/RLHC ,OAT',
    club:'Club: Raptors',
    image: `${imagePrefix}/sign-in-light.svg`,
    link: 'https://forms.gle/YuGemLNcnzX7SiH87',
    category: SectionCategory.Robotics
  },
  {
    title: 'Rocket Building Workshop',
    subTitle: 'Time: Mar 8th      venue: ALHC/RLHC ,OAT',
    club:'Club: Raptors',
    image: `${imagePrefix}/sign-in-light.svg`,
    link: 'https://forms.gle/vCGAehpCSGH7QLNF8',
    category: SectionCategory.Workshop
  },
  {
    title: 'CAD Workshop',
    subTitle: 'Time: Mar 8th      venue: ALHC/RLHC ,OAT',
    club:'Club: Raptors',
    image: `${imagePrefix}/sign-in-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScXPyBVzSPL3UsvyHHg0y0OWcoIYhgmYHFZifR_CVWh7XtJug/viewform?usp=header',
    category: SectionCategory.Workshop
  },
  {
    title: 'OptiCircuit',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    club:'Club: IoT',
    image: `${imagePrefix}/sign-up-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScwBUqXrPg0YXyZ0plJnB5oqNSimt4QASM2gRbLCq5Qe-qa0Q/viewform',
    category: SectionCategory.Iot
  },
  {
    title: 'IoT IQ Test',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    club:'Club: IoT',
    image: `${imagePrefix}/pricing-light.svg`,
    link: 'https://docs.google.com/forms/d/1-cOsqQwu7Lokd9ddtF20u8YeCoH0Fg0KyoBYIvRm-aw/edit?ts=67c2e4bb',
    category: SectionCategory.Iot
  },
  {
    title: 'Innovate & Illuminate: The Future Unveiled in Papers',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    club:'Club: IoT',
    image: `${imagePrefix}/pricing-light.svg`,
    link: 'https://docs.google.com/forms/d/1-cOsqQwu7Lokd9ddtF20u8YeCoH0Fg0KyoBYIvRm-aw/edit?ts=67c2e4bb',
    category: SectionCategory.Workshop
  },
  {
    title: 'LOLT: Laughing Out Loud with IoT',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    club:'Club: IoT',
    image: `${imagePrefix}/small-hero-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd0hswW6H1Jng8QKurnDrIWh2VVPoFH787JQI6ae7uVQQBygw/viewform',
    category: SectionCategory.Iot
  },
  {
    title: 'Hack the Grid: IoT Treasure Hunt Adventure',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    club:'Club: IoT',
    image: `${imagePrefix}/cookies-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfJrgk3mSi58Wd-xoD8dU0ytVU2eEYlePqlTF4fYD1OuZYavA/viewform',
    category: SectionCategory.Iot
  },
  {
    title: 'IoT Photography contest ',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    club:'Club: IoT',
    image: `${imagePrefix}/top-offer-bar-light.svg`,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd8Jksgw25mUtR-Cj3NcLBNuynRclliJMTaKzgI1KKFIsUXEQ/viewform',
    category: SectionCategory.Iot
  },
  {
    title: 'Recent Trends in IoT Workshop',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    club:'Club: IoT',
    image: `${imagePrefix}/top-offer-bar-light.svg`,
    link: 'https://forms.gle/wBFdqHTpmmvS8ab47',
    category: SectionCategory.Workshop
  },
  {
    title: 'Iotrix - Innovative sustainability (Hackthon',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    club:'Club: IoT',
    image: `${imagePrefix}/top-offer-bar-light.svg`,
    link: 'https://forms.gle/mDSRdpSge9qLazp58',
    category: SectionCategory.Workshop
  },
  {
    title: 'Technical Escape Challenge ',
    subTitle: 'Time: Mar 8th      venue: RLHC',
    club:'Club: MET',
    image: `${imagePrefix}/mega-menu-light.svg`,
    link: 'https://forms.gle/aSt1ixZ45Z1e8Edu7',
    category: SectionCategory.Fun
  },
  {
    title: 'Climate Debate',
    subTitle: 'Time: Mar 9th      venue: LHC',
    club:'Club: MET',
    image: `${imagePrefix}/content-light.svg`,
    link: 'https://forms.gle/uLeW5KfDfabC898K6',
    category: SectionCategory.Debates
  },
  {
    title: 'Engineering Link-Up',
    subTitle: 'Time: Mar 8th      venue: ',
    club:'Club: MET',
    image: `${imagePrefix}/forgot-pass-light.svg`,
    link: 'https://forms.gle/URd4hn3aq7PMqagW7',
    category: SectionCategory.Fun
  },
  {
    title: 'Quiz Contest',
    subTitle: 'Time: Mar 8th      venue: ',
    club:'Club: MET',
    image: `${imagePrefix}/forgot-pass-light.svg`,
    link: 'https://forms.gle/dJuhCYMUkZCk5pF7A',
    category: SectionCategory.Debates
  },
  {
    title: 'Quiz Contest',
    subTitle: 'Time: Mar 8th      venue: ',
    club:'Club: MET',
    image: `${imagePrefix}/forgot-pass-light.svg`,
    link: 'https://forms.gle/dJuhCYMUkZCk5pF7A',
    category: SectionCategory.Debates
  },
  {
    title: 'Technology For Climate Compatible Growth Workshop',
    subTitle: 'Time: Mar 8th      venue: ',
    club:'Club: MET',
    image: `${imagePrefix}/forgot-pass-light.svg`,
    link: 'https://forms.gle/GyRojAA62JnN5WZP6',
    category: SectionCategory.Workshop
  },
  {
    title: 'Sub-Sea Robotics Workshop',
    subTitle: 'Time: Mar 8th      venue: ',
    club:'Club: MET',
    image: `${imagePrefix}/forgot-pass-light.svg`,
    link: 'https://forms.gle/1tj6pr6rwpLF9J9k6',
    category: SectionCategory.Debates
  },
  {
    title: 'Hunt & Hustle',
    subTitle: 'Time: Mar 8th&9th      venue: RLHC/CB Classroom',
    club:'Club: AUSEC',
    image: `${imagePrefix}/new-pass-light.svg`,
    link: 'https://forms.gle/o4sgQ1224hXXrj1GA',
    category: SectionCategory.Debates
  },
  {
    title: 'Startup Streets: Monopoly Madness',
    subTitle: 'Time: Mar 8th      venue: Placement & Training Cell ',
    club:'GDG',
    image: `${imagePrefix}/otp-gen-light.svg`,
    link: 'https://forms.gle/s45LmM4fyoUdfEhJ6',
    category: SectionCategory.Debates
  },
  {
    title: 'The Founders Mindset Workshop',
    subTitle: 'Time: Mar 8th      venue: Placement & Training Cell ',
    club:'GDG',
    image: `${imagePrefix}/otp-gen-light.svg`,
    link: 'https://forms.gle/KBi2khYxntUDnXQh9',
    category: SectionCategory.Workshop
  },
  {
    title: 'Blitzkrieg',
    subTitle: 'Time: Mar 8th      venue: Placement Cell',
    club:'Club: QCMIT',
    image: `${imagePrefix}/404-light.svg`,
    link: 'https://forms.gle/RqjXatTHS2JPJPm87',
    category: SectionCategory.Debates
  },

  {
    title: 'Street Quizzing',
    subTitle: 'Time: Mar 8th&9th      venue: Outside area infront of Hangar 2',
    club:'Club: QCMIT',
    image: `${imagePrefix}/500-light.svg`,
    link: '',
    category: SectionCategory.Fun
  },

  {
    title: 'Collab Quiz',
    subTitle: 'Time: Mar 8th      venue: Rajam hall',
    club:'Club: QCMIT & MET',
    image: `${imagePrefix}/maintenance-light.svg`,
    link: 'https://forms.gle/MT521xEKDAg8UfWn7',
    category: SectionCategory.Debates
  }
  // {
  //   title: 'Coming Soon',
  //   subTitle: 'Time: Mar 8th      venue: ',
  //   image: `${imagePrefix}/coming-soon-light.svg`,
  //   link: PAGE_PATH.comingSoon,
  //   category: SectionCategory.MARKETING
  // },
  // {
  //   title: 'Early Access',
  //   subTitle: 'Time: Mar 8th      venue: ',
  //   image: `${imagePrefix}/early-access-light.svg`,
  //   link: PAGE_PATH.earlyAccess,
  //   category: SectionCategory.MARKETING
  // },
  // {
  //   title: 'Onboard',
  //   subTitle: 'Time: Mar 8th      venue: ',
  //   image: `${imagePrefix}/onboard-light.svg`,
  //   link: PAGE_PATH.onboard,
  //   category: SectionCategory.ESSENTIAL
  // },
  // {
  //   title: 'Other',
  //   subTitle: 'Time: Mar 8th      venue: ',
  //   image: `${imagePrefix}/other-light.svg`,
  //   link: PAGE_PATH.other,
  //   category: SectionCategory.ESSENTIAL
  // },
  // {
  //   title: 'Privacy Policy',
  //   subTitle: 'Time: Mar 8th      venue: ',
  //   image: `${imagePrefix}/privacy-policy-light.svg`,
  //   link: PAGE_PATH.privacyPolicy,
  //   category: SectionCategory.ESSENTIAL
  // },
  // {
  //   title: 'Terms Conditions',
  //   subTitle: 'Time: Mar 8th      venue: ',
  //   image: `${imagePrefix}/privacy-policy-light.svg`,
  //   link: PAGE_PATH.termsCondition,
  //   category: SectionCategory.ESSENTIAL
  // },
  // {
  //   title: 'Typography',
  //   subTitle: 'Time: Mar 8th      venue: ',
  //   image: `${imagePrefix}/typography-light.svg`,
  //   link: PAGE_PATH.typography,
  //   category: SectionCategory.ESSENTIAL
  // },
  // {
  //   title: 'Color',
  //   subTitle: 'Time: Mar 8th      venue: ',
  //   image: `${imagePrefix}/color-light.svg`,
  //   link: PAGE_PATH.color,
  //   category: SectionCategory.ESSENTIAL
  // },
  // {
  //   title: 'Icons',
  //   subTitle: 'Time: Mar 8th      venue: ',
  //   image: `${imagePrefix}/icon-light.svg`,
  //   link: PAGE_PATH.icon,
  //   category: SectionCategory.ESSENTIAL
  // }
];

const filterList = [
  { title: 'All Section', value: '' },
  { title: 'Coding', value: SectionCategory.Coding },
  { title: 'Robotics', value: SectionCategory.Robotics },
  { title: 'Technical competition and debates', value: SectionCategory.Debates },
  { title: 'IoT and Electronics', value: SectionCategory.Iot },
  { title: 'Workshops', value: SectionCategory.Workshop },
  { title: 'Fun Events', value: SectionCategory.Fun }
];

/***************************  SECTIONS LAYOUT  ***************************/

export default function Sections() {
  const theme = useTheme();
  const [filterBy, setFilterBy] = useState('');
  const [filterSections, setFilterSections] = useState(sections);

  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (event) => {
    const search = event.target.value.trim().toLowerCase();
    setSearchValue(search);
  };

  useEffect(() => {
    const newData = sections.filter((value) => {
      if (searchValue) {
        return value.title.toLowerCase().includes(searchValue.toLowerCase());
      } else {
        return value;
      }
    });
    setFilterSections(newData);
  }, [searchValue]);

  const isFocusWithin = useFocusWithin();

  return (
    <>
      <SectionHero heading="Events" search={false} offer />
      <ContainerWrapper>
        <Stack sx={{ py: 6, gap: { xs: 3, sm: 4, md: 5 } }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            sx={{ alignItems: 'center', justifyContent: 'space-between', gap: { xs: 2.5, md: 1.5 } }}
          >
            <OutlinedInput
              placeholder="Search for Events"
              slotProps={{ input: { 'aria-label': 'Search blocks' } }}
              sx={{ '.MuiOutlinedInput-input': { pl: 1.5 }, width: { sm: 456, xs: 1 } }}
              startAdornment={<SvgIcon name="tabler-search" color="grey.700" />}
              onChange={handleSearchValue}
            />
            <Stack direction="row" sx={{ gap: 1.5, flexWrap: 'wrap' }}>
              {filterList.map((item, index) => (
                <Button
                  key={index}
                  variant={filterBy === item.value ? 'contained' : 'outlined'}
                  size="small"
                  sx={{
                    ...theme.typography.subtitle2,
                    whiteSpace: 'nowrap',
                    [theme.breakpoints.down('sm')]: { px: 1.5, py: 1 }
                  }}
                  onClick={() => {
                    setFilterBy(item.value);
                    setFilterSections(item.value === '' ? sections : sections.filter((section) => section.category === item.value));
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Stack>
          </Stack>
          <Grid container spacing={1.5}>
            {filterSections.map((item, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 4 }}>
                <GraphicsCard sx={{ overflow: 'hidden', WebkitTapHighlightColor: 'transparent' }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5
                    }}
                  >
                    <GraphicsCard
                      sx={{
                        height: { xs: 240, sm: 324, md: 380 },
                        position: 'relative',
                        overflow: 'hidden',
                        ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
                      }}
                    >
                      <Link
                        href={item.link}
                        component={NextLink}
                        aria-label={item.title}
                        sx={{ position: 'absolute', top: 0, height: 1, width: 1, borderRadius: { xs: 6, sm: 8, md: 10 }, zIndex: 1 }}
                      />
                      <Background />
                      <Box sx={{ position: 'absolute', top: 0, width: 1, height: 1, textAlign: 'center' }}>
                        <CardMedia
                          component="img"
                          image={GetImagePath(item.image)}
                          sx={{ px: '14.5%', pt: '16%', pb: { xs: 2, md: 1 }, objectFit: 'contain' }}
                          alt="other sections"
                          loading="lazy"
                        />
                        <Box sx={{ '& div': { alignItems: 'center', pt: 0.875 } }}>
                          <Wave />
                        </Box>
                      </Box>
                      <Stack
                        sx={{
                          height: 177,
                          bottom: 0,
                          width: 1,
                          position: 'absolute',
                          justifyContent: 'end',
                          textAlign: 'center',
                          gap: { xs: 0.25, md: 0.5, sm: 1 },
                          p: 3,
                          background: `linear-gradient(180deg, ${alpha(theme.palette.grey[100], 0)} 0%, ${theme.palette.grey[100]} 100%)`
                        }}
                      >
                        <Typography variant="h4" sx={{ color: 'primary.main' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.subTitle}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.club}
                        </Typography>
                      </Stack>
                    </GraphicsCard>
                  </motion.div>
                </GraphicsCard>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </ContainerWrapper>
    </>
  );
}
