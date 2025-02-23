"use client";

import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { SECTION_PATH } from '@/path';

// Countdown Timer Component
const CountdownTimer = () => {
  const eventDate = new Date('2025-03-15T00:00:00'); // Set the event date
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = eventDate - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Typography variant="h6" sx={{ color: 'primary.main', mt: 2 }}>
      Countdown: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </Typography>
  );
};

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          One Event, Endless
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              Possibilities
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        />
      </>
    )
  },
  headLine: "ChakraVyuha",
  captionLine: 'A two-day celebration of innovation and technology, filled with engaging events, hands-on workshops, and exciting challenges.',
  primaryBtn: { children: 'Learn More', href: "/" },
 
  videoSrc: '/assets/videos/TechFest.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  countdownTimer: <CountdownTimer />
};

// Updated Stack Layout
<Stack spacing={2} alignItems="center">
  {hero.countdownTimer}
  <Typography variant="h3" component="h1">
    {hero.headLine}
  </Typography>
  <Typography variant="body1">{hero.captionLine}</Typography>
</Stack>
