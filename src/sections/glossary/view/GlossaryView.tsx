'use client';

// import { useState } from 'react';
import Container from '@mui/material/Container';

import MainLayout from 'src/layouts/main';
import Drawer from '@mui/material/Drawer';
import Glossary from '../Glossary';
import GlossaryNav from './GlossaryNav';

export default function FeaturesView() {
  const drawerWidth = 240;
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const [isClosing, setIsClosing] = useState(false);

  // const handleDrawerClose = () => {
  //   setIsClosing(true);
  //   setMobileOpen(false);
  // };

  // const handleDrawerTransitionEnd = () => {
  //   setIsClosing(false);
  // };

  // const handleDrawerToggle = () => {
  //   if (!isClosing) {
  //     setMobileOpen(!mobileOpen);
  //   }
  // };
  return (
    <MainLayout>
      <Container id="glossary">
        <Drawer
          variant="temporary"
          // open={mobileOpen}
          // onTransitionEnd={handleDrawerTransitionEnd}
          // onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <GlossaryNav />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <GlossaryNav />
        </Drawer>
        <Glossary />
      </Container>
    </MainLayout>
  );
}
