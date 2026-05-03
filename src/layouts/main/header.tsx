'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { useOffSetTop } from 'src/hooks/use-off-set-top';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

import { HEADER } from '../config-layout';

const NAV_ITEMS = [
  { label: 'Features', href: '/features' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

export default function Header() {
  const theme = useTheme();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    router.push(href);
  };

  return (
    <AppBar
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: offsetTop ? `1px solid ${theme.palette.divider}` : 'none',
      }}
    >
      <Toolbar
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'border-bottom'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open navigation menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, color: 'text.primary' }}
          >
            <Iconify icon="solar:hamburger-menu-linear" width={27} />
          </IconButton>

          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          <Stack
            component="nav"
            direction="row"
            spacing={4}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              mr: 4,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Box
                key={item.label}
                component="button"
                onClick={() => handleNavClick(item.href)}
                sx={{
                  bgcolor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: '1.125rem',
                  fontFamily: 'inherit',
                  px: 1.5,
                  py: 0.75,
                  borderRadius: '6px',
                  transition: 'background 0.15s ease-in-out, color 0.15s ease-in-out',
                  '&:hover': {
                    bgcolor: 'primary.darker',
                    color: 'common.white',
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Stack>

          <Stack 
            alignItems="center" 
            direction="row" 
            spacing={2} 
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <Button
              component="a"
              href="https://app.getenabled.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                fontWeight: 600,
                fontSize: '1.125rem',
                px: 3.5,
              }}
            >
              Open App
            </Button>
            <Button
              component="a"
              href="https://calendly.com/dave-getenabled/30min"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                fontWeight: 600,
                fontSize: '1.125rem',
                px: 3.5,
              }}
            >
              Book a Call
            </Button>
          </Stack>
        </Container>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        <Box sx={{ px: 2, py: 3 }}>
          <Logo />
        </Box>
        <Divider />
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleDrawerToggle();
                  handleNavClick(item.href);
                }}
              >
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 500 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            component="a"
            href="https://app.getenabled.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            fullWidth
            sx={{ fontWeight: 600 }}
          >
            Open App
          </Button>
          <Button
            component="a"
            href="https://calendly.com/dave-getenabled/30min"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            fullWidth
            sx={{ fontWeight: 600 }}
          >
            Book a Call
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
