import React, { useState } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

const GlossaryNav = () => {
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '5%' }}>
      <List component="nav" aria-label="alphabet nav">
        {alphabet.map((item, index) => (
          <ListItemButton
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(index)}
            component={Link}
            href={`#${alphabet[index]}`}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default GlossaryNav;
