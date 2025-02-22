'use client';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import { Box, Typography, Stack, Container } from '@mui/material';

function AboutMIT() {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container sx={{ py: 6 }}>
      <Stack 
        direction={downMD ? 'column' : 'row'} 
        spacing={4} 
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: downMD ? '100%' : '50%' }}
        >
          <Box
            component="img"
            src="assets/images/MIT.png"
            alt="Madras Institute of Technology"
            sx={{
              width: '100%',
              borderRadius: 2,
            }}
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: downMD ? '100%' : '50%' }}
        >
          <Stack spacing={2} textAlign={downMD ? 'center' : 'justify'}>
            <Typography variant="h4" fontWeight={600}>
              About Madras Institute of Technology (MIT)
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'justify' }}>
              Established in 1949 by the visionary C. Rajam, the Madras Institute of Technology (MIT) is 
              one of India's premier engineering institutions. As a part of Anna University, MIT has been 
              at the forefront of technological innovation and academic excellence, producing some of the 
              nation’s most brilliant engineers, scientists, and researchers.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'justify' }}>
              MIT is known for its pioneering efforts in Aeronautical Engineering, Electronics, Computer Science, 
              and Robotics, among other disciplines. With a strong research culture, cutting-edge laboratories, 
              and a dynamic learning environment, the institution continuously pushes the boundaries of innovation.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'justify' }}>
              As an integral part of Anna University, MIT continues to shape the future of technology, empowering 
              students with the skills, knowledge, and vision to drive progress and innovation globally.
            </Typography>
          </Stack>
        </motion.div>
      </Stack>
    </Container>
  );
}

export { AboutMIT };
export default AboutMIT;
