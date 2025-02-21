'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

// @project
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import LogoMain from './LogoMain';
import LogoIcon from './LogoIcon';

/***************************  MAIN - LOGO  ***************************/

export default function LogoSection({ isIcon, sx, to }) {
  const theme = useTheme();
  return (
    <NextLink href={!to ? process.env.NEXT_PUBLIC_BASE_NAME || '/' : to} passHref legacyBehavior>
      <ButtonBase
        disableRipple
        sx={{
          ...sx,
          display: 'block',
          '&:focus-visible': generateFocusVisibleStyles(theme.palette.primary.main),
          padding: theme.spacing(1),
        }}
        aria-label="logo"
      >
        <img
          src="assets/images/ChakraVyuha-Logo.png"
          alt="logo"
          style={{
            width: '150%',
            height: 'auto',
            maxWidth: '150px',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </ButtonBase>
    </NextLink>
  );
}

LogoSection.propTypes = { isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.string };
