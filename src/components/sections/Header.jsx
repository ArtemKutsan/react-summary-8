// src/components/sections/Header/index.jsx
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Nav from '../Nav';

function Header() {
  return (
    <AppBar position="static" sx={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.125)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <Typography variant="h6">Material UI</Typography>
        <Nav />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
