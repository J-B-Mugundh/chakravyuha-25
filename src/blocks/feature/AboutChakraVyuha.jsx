'use client';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import { Box, Typography, Stack, Container } from '@mui/material';

function AboutChakraVyuha() {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container sx={{ py: 6 }}>
      <Stack 
        direction={downMD ? 'column' : 'row'} 
        spacing={4} 
        alignItems="center"
        justifyContent="space-between" // Ensures even spacing
      >
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: downMD ? '100%' : '50%' }} // 50% width for content
        >
          <Stack spacing={2} textAlign={downMD ? 'center' : 'justify'}>
            <Typography variant="h4" fontWeight={600}>
              Unravel the Significance of ChakraVyuha'25
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'justify' }}>
              Chakravyuha symbolizes the fusion of intricate strategy, intelligence, and innovation—qualities 
              that define both ancient warfare and modern technology. In the Mahabharata, only the most skilled 
              and strategic minds could navigate this formation, and today’s tech landscape is no different. 
              To thrive, one must embrace adaptability, problem-solving, and futuristic thinking.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'justify' }}>
              Just like the interwoven layers of the Chakravyuha, today’s world is built on the seamless 
              integration of robotics, IoT, AI, software engineering, and entrepreneurship—each a vital 
              component in shaping the next era of technological breakthroughs.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'justify' }}>
              Chakravyuha’25 is a two-day fest where all technical clubs of MIT come together to host a dynamic 
              lineup of events, workshops, and competitions—challenging minds, fostering collaboration, and pushing 
              the boundaries of innovation. This fest is more than a competition; it is a battlefield of ideas, 
              where the brightest minds will challenge the status quo, push boundaries, and forge the future.
            </Typography>
          </Stack>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: downMD ? '100%' : '50%' }} // 50% width for image
        >
          <Box
            component="img"
            src="assets/images/ChakraVyuha-Logo.png"
            alt="Mission Vision"
            sx={{
              width: '100%', // Fill half of the container
              borderRadius: 2,
            }}
          />
        </motion.div>
      </Stack>
    </Container>
  );
}

export { AboutChakraVyuha };
export default AboutChakraVyuha;
