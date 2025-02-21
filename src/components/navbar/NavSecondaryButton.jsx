import PropTypes from 'prop-types';
// @next
import NextLink from 'next/link';

// @mui
import Button from '@mui/material/Button';

/***************************  NAVBAR - SECONDARY BUTTON  ***************************/

export default function NavSecondaryButton({ sx, children, ...rest }) {
  return (
    <Button>
      {children || ''}
    </Button>
  );
}

NavSecondaryButton.propTypes = { sx: PropTypes.any, children: PropTypes.any, rest: PropTypes.any };
