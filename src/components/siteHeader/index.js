import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import LockIcon from '@mui/icons-material/Lock';
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcomingmovies" },
    { label: "Now Playing", path: "/movies/nowplayingmovies" },
    { label: "Popular", path: "/movies/popularmovies" },
    { label: "🌟Top Rated", path: "/movies/topratedmovies" },
    { label: "Actors", path: "/actors" },
    { label: "Trending Actors", path: "/actors/popularactors" },
    { label: "Login", path: "/users/login", icon: <WavingHandIcon /> },
    { label: "Signup", path: "/users/signup", icon: <LockIcon /> },

  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuOptions.map((opt) => (
                    <React.Fragment key={opt.label}>
                      <MenuItem onClick={() => handleMenuSelect(opt.path)}>
                        {opt.label}
                      </MenuItem>
                      {opt.label === "🌟Top Rated" || opt.label === "Actors" ? <Divider sx={{ borderColor: 'white' }}/> : null}
                    </React.Fragment>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                {menuOptions.map((opt,index) => (
                 <React.Fragment key={opt.label}>
                 <Button
                   color="inherit"
                   startIcon={opt.icon}
                   onClick={() => handleMenuSelect(opt.path)}
                 >
                   {opt.label}
                 </Button>
                 {index === 5 || index === menuOptions.length - 3 ? <Divider orientation="vertical" flexItem sx={{ borderColor: 'white' }} /> : null}
               </React.Fragment>
                ))}
              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;