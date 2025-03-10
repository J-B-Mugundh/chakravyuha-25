import PropTypes from 'prop-types';
// @next
import NextLink from 'next/link';

// @mui
import Button from '@mui/material/Button';

/***************************  NAVBAR - PRIMARY BUTTON  ***************************/

export default function NavPrimaryButton({ sx, children, ...rest }) {
  return (
    <Button>
      {children || ''}
    </Button>
  );
}

NavPrimaryButton.propTypes = { sx: PropTypes.any, children: PropTypes.any, rest: PropTypes.any };
