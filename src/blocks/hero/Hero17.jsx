'use client';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// @third-party
import { motion, useScroll, useTransform } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';
import { getBackgroundDots } from '@/utils/getBackgroundDots';

// @assets
import Wave from '@/images/graphics/Wave';

const options = { root: null, rootMargin: '0px', threshold: 0.6 };

export default function Hero17({ chip, headLine, captionLine, primaryBtn, videoSrc, videoThumbnail }) {
  const theme = useTheme();
  const boxRadius = { xs: 24, sm: 32, md: 40 };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.4, 0.6], [0.9, 0.92, 0.94, 0.96, 1]);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-03-15T00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);
    return () => clearInterval(interval);
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
      <Box
        sx={{
          height: { xs: 592, sm: 738, md: 878 },
          position: 'absolute',
          top: 0,
          left: 0,
          width: 1,
          zIndex: -1,
          borderBottomLeftRadius: boxRadius,
          borderBottomRightRadius: boxRadius,
          background: getBackgroundDots(theme.palette.grey[300], 60, 35),
          bgcolor: 'grey.100'
        }}
      />
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box ref={containerRef}>
          <Stack sx={{ alignItems: 'center', gap: 1.5, pb: { xs: 3, sm: 4, md: 5 } }}>
            <Chip
              variant="outlined"
              label={<Typography variant="caption" sx={{ color: 'text.secondary' }}>{chip.label}</Typography>}
              sx={{ bgcolor: 'grey.100', '& .MuiChip-label': { py: 0.5, px: 1.5 } }}
            />
            <Typography variant="h1" align="center" sx={{ maxWidth: 800 }}>{headLine}</Typography>
            <Box sx={{ pt: 0.5, pb: 0.75 }}><Wave /></Box>
            <Typography variant="h6" align="center" sx={{ color: 'text.secondary', maxWidth: 650 }}>{captionLine}</Typography>
            <Stack sx={{ alignItems: 'center', gap: 2, mt: { xs: 3, sm: 4, md: 5 } }}>
              <ButtonAnimationWrapper>
                <Button color="primary" variant="contained" startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />} {...primaryBtn} />
              </ButtonAnimationWrapper>
              
              <Typography variant="h5" sx={{ fontWeight: 'bold', bgcolor: 'primary.light', color: 'primary.dark', px: 2, py: 1, borderRadius: 1, textAlign: 'center' }}>
                The wait is until
              </Typography>
              
              <Grid 
                container 
                spacing={2} 
                sx={{ mt: 2, textAlign: 'center', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}
              >
                {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
                  <Grid item xs={3} key={label}>
                    <Box sx={{ p: 2, border: '2px solid', borderColor: 'primary.main', borderRadius: 2, boxShadow: '0 0 15px rgba(0, 150, 255, 0.7)' }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{[days, hours, minutes, seconds][index]}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Box>
      </ContainerWrapper>
    </>
  );
}

Hero17.propTypes = {
  chip: PropTypes.object,
  headLine: PropTypes.string,
  captionLine: PropTypes.string,
  primaryBtn: PropTypes.any,
  videoSrc: PropTypes.string
};
