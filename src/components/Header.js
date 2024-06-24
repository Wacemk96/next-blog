'use client';

import Link from 'next/link';
import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Menu as MenuComponent} from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <MenuComponent
      anchorEl={anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        href="/"
      >
        Home
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        href="/"
      >
        Blog
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        href="/about"
      >
        About
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}
        component={Link}
        href="/contact"
      >
        Contact
      </MenuItem>
    </MenuComponent>
  );

  return (
    <AppBar
      position="static"
      sx={{backgroundColor: 'transparent', boxShadow: 'none'}}
    >
      <Toolbar sx={{justifyContent: 'space-between', py: 2, px: 3}}>
        <Typography
          component={Link}
          href="/"
          sx={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}
        >
          <img
            src="/nextblog.png"
            alt="logo"
            style={{width: '80px', cursor: 'pointer'}}
          />
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{color: 'black'}}
              >
                <Menu />
              </IconButton>
              {renderMenu}
            </>
          ) : (
            <Box sx={{display: 'flex', gap: 3}}>
              <Button
                component={Link}
                href="/"
                size="large"
              >
                Home
              </Button>
              <Button
                component={Link}
                href="/"
                size="large"
              >
                Blog
              </Button>
              <Button
                component={Link}
                href="/about"
                size="large"
              >
                About
              </Button>
              <Button
                component={Link}
                href="/contact"
                size="large"
              >
                Contact
              </Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
