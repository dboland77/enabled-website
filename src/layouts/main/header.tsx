'use client';

import { useState } from 'react';
import NextLink from 'next/link';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
import MuiLink from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { useOffSetTop } from 'src/hooks/use-off-set-top';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import { HEADER } from '../config-layout';
import HeaderShadow from '../common/header-shadow';

const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar>
      <Toolbar
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
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
            <Iconify icon="solar:hamburger-menu-linear" width={24} />
          </IconButton>

          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 12,
                right: -16,
              },
            }}
            badgeContent={
              <Label color="info" sx={{ textTransform: 'unset', height: 22, px: 0.5 }}>
                Beta
              </Label>
            }
          >
            <Logo />
          </Badge>

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
              <MuiLink
                key={item.label}
                component={NextLink}
                href={item.href}
                underline="none"
                sx={{
                  color: 'text.primary',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item.label}
              </MuiLink>
            ))}
          </Stack>

          <Stack alignItems="center" direction="row" spacing={2}>
            <Button
              component="a"
              href="https://app.getenabled.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                fontWeight: 600,
                px: 3,
                display: { xs: 'none', sm: 'inline-flex' },
              }}
            >
              Open App
            </Button>
            <Button
              component={NextLink}
              href="/contact"
              variant="contained"
              sx={{
                fontWeight: 600,
                px: 3,
              }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}

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
                component={NextLink}
                href={item.href}
                onClick={handleDrawerToggle}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
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
            component={NextLink}
            href="/contact"
            variant="contained"
            fullWidth
            onClick={handleDrawerToggle}
            sx={{ fontWeight: 600 }}
          >
            Get in Touch
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
