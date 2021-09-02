import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Tooltip from '@material-ui/core/Tooltip';
import { useState } from 'react';
import { StyledTextField, useStyles } from './Header.style';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

const options = ['London', 'Tel-Aviv', 'Jerusalem', 'New-York', 'Coscu', 'Manchester', 'Madrid'];

export default function Header({ handleValueChanged, handleInputChange, searchOptions }: any) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleSearch = (event: React.ChangeEvent<{}>, value: string | null) => {
    setSearchQuery(value);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    // setAnchorEl(event.currentTarget);

    console.log('Language Changed:');
  };

  const handleThemeClick = (event: React.MouseEvent<HTMLElement>) => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    // setAnchorEl(event.currentTarget);

    console.log('Theme Changed');
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Weather-App
          </Typography>
          <div className={classes.search}>
            <Autocomplete
              size="small"
              style={{ width: 300 }}
              // classes={{
              //   root: classes.inputRoot,
              //   input: classes.inputInput,
              // }}
              id="free-solo-demo"
              freeSolo
              getOptionLabel={(option: Record<string, any>) => option.name + ',' + option.country}
              options={searchOptions}
              onInputChange={handleInputChange}
              onChange={handleValueChanged}
              renderInput={(params) => (
                <StyledTextField {...params} fullWidth value={searchQuery} placeholder="Search" variant="outlined" />
              )}
            />
          </div>
          <div className={classes.growButtons} />
          <div className={classes.sectionDesktop}>
            <Tooltip title="Change Language">
              <IconButton color="inherit" onClick={handleLanguageClick}>
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Toggle theme">
              <IconButton color="inherit" onClick={handleThemeClick}>
                <Brightness4Icon />
              </IconButton>
            </Tooltip>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </div>
  );
}
