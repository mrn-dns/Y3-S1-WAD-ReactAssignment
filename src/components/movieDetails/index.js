import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import { Link } from "react-router-dom";
//New  Material UI component added
import { Button } from "@mui/material";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip icon={<MonetizationIcon />} label={`${movie.revenue.toLocaleString()}`} />
        <Chip icon={<StarRate />} label={`${movie.vote_average} (${movie.vote_count})`} />
        <Chip icon={<CalendarMonthIcon />} label={`Released: ${movie.release_date}`} />
      </Paper>

      {/* PRODUCTION COUNTRY */}
      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      {/* SIMILAR & CAST BUTTONS */}
      <Paper component="ul" sx={{...root}}>
          <Link to={`/movies/${movie.id}/similar`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
            View Similar Movies
          </Button>
        </Link>
        <Link to={`https://www.themoviedb.org/movie/${movie.id}/cast`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="primary" style={{ marginTop: '16px',marginLeft: '16px' }}>
            View Full Cast List
          </Button>
        </Link>
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;