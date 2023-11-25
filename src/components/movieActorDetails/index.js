import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TransgenderIcon from '@mui/icons-material/Transgender';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
//New  Material UI component added
import { Button } from "@mui/material";
import ActorMovieCreditsCard from "../actorPortofolioCard";
import { useQuery } from "react-query";
import { Grid } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { getActorPortofolio } from "../../api/tmdb-api";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const chip = { margin: 0.5 };

const getGenderLabel = (gender) => {
  switch (gender) {
    case 1:
      return "Female";
    case 2:
      return "Male";              //FUNCTION THAT DISPLAYS "GENDER" INSTEAD OF NUMERIC VALUES - COVERS ALL CASES
    case 3:
      return "Non-binary";
    default:
      return "Unknown";
  }
};   

const MovieActorDetails = ({ actors }) => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data: actorMovieCredits, isLoading, isError, error } = useQuery(
    ["actorMovieCredits", { id: actors.id }], 
    getActorPortofolio
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const genderLabel = getGenderLabel(actors.gender);

  return (
    <>
      <Typography variant="h5" component="h3">
        {actors.name}
      </Typography>

      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>


      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Name & DOB" sx={{...chip}} color="primary" />
        </li>
        <li><Chip sx={{...chip}} icon={<AccountCircleIcon />} label={`${actors.name}`} /></li>
        <li><Chip sx={{...chip}} icon={<CalendarMonthIcon />} label={`${actors.birthday}`} /></li>
      </Paper>

      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Place of Birth" sx={{...chip}} color="primary" />
        </li>
        <li><Chip sx={{...chip}} icon={<LocationOnIcon />} label={`${actors.place_of_birth}`} /></li>
      </Paper>

      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Gender" sx={{...chip}} color="primary" />
        </li>
        <li><Chip sx={{...chip}} icon={<TransgenderIcon />} label={genderLabel} /></li>
      </Paper>

      <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Best known for" sx={{...chip}} color="primary" />
        </li>
        <li><Chip sx={{...chip}} icon={<StarBorderIcon />} label={`${actors.known_for_department}`} /></li>
      </Paper>
      
      <Paper component="ul" sx={{...root}}>
          <Link to={`https://www.themoviedb.org/person/${actors.id}`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
              Profile
            </Button>
          </Link>
          <br/>
      </Paper>
      <Paper>
          <Typography variant="h5" component="h3">
              Movies {actors.name} has starred in
            </Typography>
            <br/>
            <Grid container spacing={2}>
              {actorMovieCredits && actorMovieCredits.cast.map((movie) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                  <ActorMovieCreditsCard movie={movie} />
                </Grid>
              ))}
            </Grid>

            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            </Drawer>
      </Paper>
    </>
  );
};
export default MovieActorDetails ;