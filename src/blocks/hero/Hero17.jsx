'use client';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import { Chip, Stack, Typography, Box, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion, useScroll, useTransform } from 'framer-motion';

import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';
import Wave from '@/images/graphics/Wave';

// Intersection Observer options
const options = { root: null, rootMargin: '0px', threshold: 0.6 };

export default function Hero17({ chip, headLine, captionLine, primaryBtn, videoSrc, videoThumbnail }) {
  const theme = useTheme();
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-03-12T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft(difference > 0 ? difference : 0);
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <>
      <Box sx={{ background: getBackgroundDots(theme.palette.grey[300], 60, 35), bgcolor: 'grey.100' }} />
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box ref={containerRef}>
          {/* Header Section */}
          <Stack sx={{ alignItems: 'center', gap: 1.5 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <Chip variant="outlined" label={<Typography variant="caption">{chip.label}</Typography>} sx={{ bgcolor: 'grey.100', py: 0.5, px: 1.5 }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
              <Typography variant="h1" align="center" sx={{ maxWidth: 800 }}>
                {headLine}
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <Box sx={{ pt: 0.5, pb: 0.75 }}>
                <Wave />
              </Box>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <Typography variant="h6" align="center" sx={{ color: 'text.secondary', maxWidth: 650 }}>
                {captionLine}
              </Typography>
            </motion.div>
          </Stack>

          {/* Button & Timer */}
          <Stack sx={{ alignItems: 'center', gap: 2, mt: 5 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
              <ButtonAnimationWrapper>
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                  {...primaryBtn}
                />
              </ButtonAnimationWrapper>
            </motion.div>

            <Typography variant="h5" sx={{ fontWeight: 'bold', bgcolor: 'primary.light', color: 'primary.dark', px: 2, py: 1, borderRadius: 1, textAlign: 'center' }}>
              The wait is until
            </Typography>

            {/* Countdown Timer */}
            <Grid container spacing={2} sx={{ mt: 2, textAlign: 'center' }}>
              {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
                <Grid item xs={3} key={label}>
                 <Box
  sx={{
    width: 290, // Ensuring square shape
    height: 80, // Ensuring square shape
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid',
    borderColor: 'primary.main',
    borderRadius: 2,
    boxShadow: '0 0 15px rgba(0, 150, 255, 0.7)'
  }}
>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                      {[days, hours, minutes, seconds][index]}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>

          {/* Video Section */}
          <motion.div initial={{ opacity: 0, y: 0 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} style={{ scale }}>
            <GraphicsCard sx={{ border: '5px solid', borderColor: 'grey.300', mt: 5 }}>
              <video
                playsInline
                ref={videoRef}
                width="100%"
                height="100%"
                style={{ borderRadius: 12 }}
                poster={videoThumbnail}
                loop
                muted
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </GraphicsCard>
          </motion.div>
        </Box>
      </ContainerWrapper>
    </>
  );
}

Hero17.propTypes = {
  chip: PropTypes.object,
  headLine: PropTypes.string,
  captionLine: PropTypes.string,
  primaryBtn: PropTypes.object,
  videoSrc: PropTypes.string,
  videoThumbnail: PropTypes.string
};
