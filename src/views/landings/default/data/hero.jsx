// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

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
  headLine: "ChakraVyuha'25",
  captionLine: 'A two-day celebration of innovation and technology, filled with engaging events, hands-on workshops, and exciting challenges.',
  primaryBtn: { children: 'Learn More', href: "/" },
  videoSrc: '/assets/videos/TechFest.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png'
};
