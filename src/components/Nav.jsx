// src/components/Nav.jsx
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Profile', path: '/profile' },
];

function Nav() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {navLinks.map((item) => (
        <Button
          key={item.title}
          component={NavLink}
          to={item.path}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 3,
            px: 2,
            color: 'primary.contrastText',
            '&.active': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          {item.title}
        </Button>
      ))}
    </Box>
  );
}

export default Nav;
