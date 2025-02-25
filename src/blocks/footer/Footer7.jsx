'use client';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { motion } from 'framer-motion';

// @project
import branding from '@/branding.json';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, FollowUS, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import SvgIcon from '@/components/SvgIcon';

import { CopyrightType } from '@/enum';
import { DOCS_URL, FREEBIES_URL } from '@/path';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  FOOTER - 7 DATA  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
const data = [
  {
    id: 'column1',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Contacts',
    menu: [
      { label: 'MITRA', contact: 'Bharath Raj', phone: '+91 7305617969' },
      { label: 'RAPTORS', contact: 'Deepak Kumar', phone: '+91 9159937892' },
      { label: 'csmit', contact: 'Deepan Kumar', phone: '+91 9150089300' },
      { label: 'AUSEC', contact: 'Abhiejit Keshavan', phone: '+91 9150862235' }
    ]
  },
  {
    id: 'column2',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Contacts',
    menu: [
      { label: 'QUANTUMIT', contact: 'Parvathavarthini', phone: '+91 6374918148' },
      { label: 'QCMIT', contact: 'Daphny Jessica', phone: '+91 7305689591' },
      { label: 'GDG', contact: 'Mugundh', phone: '+91 9080024186' },
      { label: 'IoT', contact: 'Diksha Mary Jose J', phone: '+91 9360966766' }
    ]
  },
  {
    id: 'column3',
    grid: { size: { xs: 12, sm: 'auto' } },
    title: 'Contacts',
    menu: [
      { label: 'MIT MET', contact: 'Nijerson', phone: '+91 6382847781' },
      { label: 'TEDCMIT', contact: 'Selvalingam', phone: '+91 8056766785' },
      { label: 'TAMIL MANDRAM', contact: 'Abishek', phone: '+91 9159388148' },
      { label: 'PSMIT', contact: 'Jaabir', phone: '+91 7339057808' }
    ]
  }
];

const iconProps = { color: 'text.secondary' };

const usefullLinks = [
  // {
  //   icon: <SvgIcon name="tabler-brand-figma" {...iconProps} />,
  //   title: 'Figma Version 1.0.0',
  //   href: 'https://www.figma.com/community/file/1425095061180549847'
  // },
  // {
  //   icon: <SvgIcon name="tabler-route" {...iconProps} />,
  //   title: 'React Material UI v6.1.4',
  //   href: 'https://mui.com/material-ui/getting-started'
  // },
  // {
  //   icon: <SvgIcon name="tabler-sparkles" {...iconProps} />,
  //   title: 'Documentation',
  //   href: DOCS_URL
  // }
];

/***************************  FOOTER - 7  ***************************/

export default function Footer7() {
  const logoFollowContent = (
    <Stack
      sx={{
        alignItems: 'center',
        textAlign: 'center',
        gap: { xs: 2, sm: 3 },
        '&:hover': { transform: 'scale(1.02)', transition: '0.3s ease-in-out' },
      }}
    >
      <LogoSection />
      <Typography variant="body2" sx={{ maxWidth: 600, color: 'black', fontWeight: 500 }}>
        A two-day celebration of innovation and technology, filled with engaging events, hands-on workshops, and exciting challenges.
      </Typography>
    </Stack>
  );

  const contactData = [
    [
      { name: 'MITRA', person: 'Bharath Raj', phone: '+91 7305617969' },
      { name: 'RAPTORS', person: 'Deepak Kumar', phone: '+91 9159937892' },
      { name: 'CSMIT', person: 'Deepan Kumar', phone: '+91 9150089300' },
      { name: 'AUSEC MIT', person: 'Abhiejit Keshavan', phone: '+91 9150862235' }
    ],
    [
      { name: 'QUANTUMIT', person: 'Parvathavarthini', phone: '+91 6374918148' },
      { name: 'QCMIT', person: 'Daphny Jessica', phone: '+91 7305689591' },
      { name: 'GDG MIT', person: 'Mugundh', phone: '+91 9080024186' },
      { name: 'IoT', person: 'Diksha Mary Jose', phone: '+91 9360966766' }
    ],
    [
      { name: 'MIT MET', person: 'Nijerson', phone: '+91 6382847781' },
      { name: 'TEDCMIT', person: 'Selvalingam', phone: '+91 8056766785' },
      { name: 'TAMIL MANDRAM', person: 'Abishek', phone: '+91 9159388148' },
      { name: 'PSMIT', person: 'Jaabir', phone: '+91 7339057808' }
    ]
  ];

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY, color: 'black' }}>
      <Stack
        id="footer-7"
        role="contentinfo"
        aria-label="Footer 7"
        sx={{
          gap: { xs: 4, sm: 5 },
          textAlign: 'center',
          '&:hover': { transition: '0.3s', opacity: 0.95 },
        }}
      >
        {/* First Row: Image and Text */}
        <motion.div initial={{ opacity: 1, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          {logoFollowContent}
        </motion.div>

        <motion.div initial={{ opacity: 1, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <div sx={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        transition: '0.3s',
                        '&:hover': {
                          color: 'black',
                          cursor: 'pointer',
                          transform: 'scale(1.05)',
                          transition: '0.3s ease-in-out',
                        },
                      }}>
                      Contacts
                      </div>
        </motion.div>

        {/* Second Row: Contact Details in Three Columns */}
        <motion.div initial={{ opacity: 1, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Grid container spacing={4} justifyContent="center">
            {contactData.map((column, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Stack sx={{ gap: 2, alignItems: 'center' }}>
                  {column.map(({ name, person, phone }, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: 'grey.700',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        transition: '0.3s',
                        '&:hover': {
                          color: 'black',
                          cursor: 'pointer',
                          transform: 'scale(1.05)',
                          transition: '0.3s ease-in-out',
                        },
                      }}
                    >
                      {`${name} - ${person} - ${phone}`}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Copyright and Follow Us Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <GraphicsCard
            sx={{
              borderRadius: { xs: 6, sm: 8 },
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: '0 4px 10px rgba(8, 8, 8, 0.3)',
              backdropFilter: 'blur(5px)',
            }}
          >
            <Stack
              direction={{ sm: 'row' }}
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 1.5,
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 },
              }}
            >
              <Copyright type={CopyrightType.TYPE3} />
              <FollowUS heading={false} color="grey.100" />
            </Stack>
          </GraphicsCard>
        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}