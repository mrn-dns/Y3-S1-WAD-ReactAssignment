import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

// REFERENCE : https://juliapottinger.com/react-gatsby-scroll-to-top/

const ScrollButton = styled(IconButton)(({ theme }) => ({
  zIndex: 2,
  position: 'fixed',
  bottom: '2vh',
  backgroundColor: '#DCDCDC',
  color: 'black',
  "&:hover, &.Mui-focusVisible": {
    transition: '0.3s',
    color: '#397BA6',
    backgroundColor: '#DCDCDC'
  },
  [theme.breakpoints.up('xs')]: {
    right: '5%',
    backgroundColor: 'rgb(220,220,220,0.7)',
  },
  [theme.breakpoints.up('lg')]: {
    right: '6.5%',
  },
}));

const Scroll = ({
  showBelow,
}) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.scrollY > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [showBelow]);

  return (
    <div>
      {show && (
        <ScrollButton onClick={handleClick} aria-label="to top" component="span">
          <ExpandLessIcon />
        </ScrollButton>
      )}
    </div>
  );
};

export default Scroll;
