import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  showBeta?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, showBeta = true, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        sx={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          pr: showBeta ? '48px' : 0,
          ...sx,
        }}
        {...other}
      >
        <Box
          component="span"
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            fontSize: 34,
            color: 'primary.darker',
            userSelect: 'none',
          }}
        >
          enable
          <Box component="span" sx={{ color: 'primary.dark' }}>
            D
          </Box>
        </Box>

        {showBeta && (
          <Box
            component="span"
            sx={{
              position: 'absolute',
              top: -10,
              right: 8,
              bgcolor: 'error.main',
              color: '#fff',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              px: '7px',
              py: '2px',
              borderRadius: '4px',
              lineHeight: 1.4,
              whiteSpace: 'nowrap',
              boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
              pointerEvents: 'none',
            }}
          >
            Beta
          </Box>
        )}
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

Logo.displayName = 'Logo';

export default Logo;
