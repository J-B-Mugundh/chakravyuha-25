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
import { PAGE_PATH } from '@/path';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import GetImagePath from '@/utils/GetImagePath';

// @assets
import Background from '@/images/graphics/Background';
import Wave from '@/images/graphics/Wave';

var SectionCategory;

(function (SectionCategory) {
  SectionCategory['ESSENTIAL'] = 'essential';
  SectionCategory['MARKETING'] = 'marketing';
  SectionCategory['FEATURE'] = 'feature';
})(SectionCategory || (SectionCategory = {}));

const imagePrefix = '/assets/images/presentation';

/***************************  SECTIONS - DATA  ***************************/

const sections = [
  {
    title: 'Street Coding ',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    image: `${imagePrefix}/navbar-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'OSPC',
    subTitle: 'Time: Mar 8th&9th      venue: IT Lab',
    image: `${imagePrefix}/hero-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'Bug Hunt',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    image: `${imagePrefix}/clientele-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'My Sequel ',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    image: `${imagePrefix}/benefits-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.FEATURE
  },
  {
    title: 'Sight on Site',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    image: `${imagePrefix}/feature-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.FEATURE
  },
  {
    title: 'Tech Connector',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    image: `${imagePrefix}/process-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.FEATURE
  },
  {
    title: 'Code Noobies',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    image: `${imagePrefix}/integration-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.FEATURE
  },
  {
    title: 'Syntax Skit',
    subTitle: 'Time: Mar 8th&9th      venue: GROUND FLOOR LHC',
    image: `${imagePrefix}/testimonial-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'Line Follower',
    subTitle: 'Time: Mar 8th      venue: RLHC',
    image: `${imagePrefix}/cta-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'All Terrain Robot',
    subTitle: 'Time: Mar 8th      venue: Old PT Hut',
    image: `${imagePrefix}/blog-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'Robo Soccer',
    subTitle: 'Time: Mar 8th      venue: Connect Point',
    image: `${imagePrefix}/faqs-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Robo War',
    subTitle: 'Time: Mar 8th      venue: Connect Point',
    image: `${imagePrefix}/footer-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'QDebate',
    subTitle: 'Time: Mar 9th      venue: RLHC classroom ',
    image: `${imagePrefix}/team-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'Reverse Engineer Jam ',
    subTitle: 'Time: Mar 8th      venue: CB Lab',
    image: `${imagePrefix}/contact-us-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Tech Cipher Hunt',
    subTitle: 'Time: Mar 8th      venue: LHC / RLHC / CT Dept',
    image: `${imagePrefix}/gallery-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'mission planer software ',
    subTitle: 'Time: Mar 8th      venue: ALHC/RLHC ,OAT',
    image: `${imagePrefix}/sign-in-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'OptiCircuit',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    image: `${imagePrefix}/sign-up-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'IoT IQ Test',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    image: `${imagePrefix}/pricing-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.FEATURE
  },
  {
    title: 'LOLT: Laughing Out Loud with IoT',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    image: `${imagePrefix}/small-hero-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'Hack the Grid: IoT Treasure Hunt Adventure',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    image: `${imagePrefix}/cookies-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'IoT Photography contest ',
    subTitle: 'Time: Mar 8th      venue: RLHC/LHC',
    image: `${imagePrefix}/top-offer-bar-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'MeT Escape Room',
    subTitle: 'Time: Mar 8th      venue: RLHC',
    image: `${imagePrefix}/mega-menu-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'MeT Connection',
    subTitle: 'Time: Mar 9th      venue: LHC',
    image: `${imagePrefix}/content-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.MARKETING
  },
  {
    title: 'Weather Photography Contest',
    subTitle: 'Time: Mar 8th      venue: ',
    image: `${imagePrefix}/forgot-pass-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Hunt & Hustle',
    subTitle: 'Time: Mar 8th&9th      venue: RLHC/CB Classroom',
    image: `${imagePrefix}/new-pass-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Startup Streets: Monopoly Madness',
    subTitle: 'Time: Mar 8th      venue: Placement & Training Cell ',
    image: `${imagePrefix}/otp-gen-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },
  {
    title: 'Blitzkrieg',
    subTitle: 'Time: Mar 8th      venue: Placement Cell',
    image: `${imagePrefix}/404-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },

  {
    title: 'Street Quizzing',
    subTitle: 'Time: Mar 8th&9th      venue: Outside area infront of Hangar 2',
    image: `${imagePrefix}/500-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
  },

  {
    title: 'Innovate',
    subTitle: 'Time: Mar 8th      venue: Rajam hall',
    image: `${imagePrefix}/maintenance-light.svg`,
    link: 'https://docs.google.com/forms/d/14abc8waXn19Yv_Ue1kIKwMnoR3MGcm9JUxnm1GtCvag/edit',
    category: SectionCategory.ESSENTIAL
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
  { title: 'Marketing', value: SectionCategory.MARKETING },
  { title: 'Feature', value: SectionCategory.FEATURE },
  { title: 'Essential', value: SectionCategory.ESSENTIAL }
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
