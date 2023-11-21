import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TransgenderIcon from '@mui/icons-material/Transgender';
import Typography from "@mui/material/Typography";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const MovieActorDetails = ({ actors }) => {  

  return (
    <>
      <Typography variant="h5" component="h3">
        {actors.name}
      </Typography>

      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>

      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccountCircleIcon />} label={`${actors.name}`} />
        <Chip icon={<CalendarMonthIcon />} label={`${actors.birthday}`} />
        <Chip icon={<TransgenderIcon />} label={`${actors.gender}`} />
      </Paper>
    </>
  );
};
export default MovieActorDetails ;