import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { MoviesContext } from "../../contexts/moviesContext";

export default function MovieCard({movie,action}) {
  const { favorites, addToFavorites } = useContext(MoviesContext);
  const { toWatch, addToWatch } = useContext(MoviesContext);

  if (toWatch.find((id) => id === movie.id)) {
    movie.toWatch = true;
  } else {
    movie.toWatch = false
  }

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  // const handleAddToWatch = (e) => {
  //   e.preventDefault();
  //   addToWatch(movie);
  // };

  // const handleAddToFavorite = (e) => {
  //   e.preventDefault();
  //   addToFavorites(movie);
  // };

  return (
    <Card sx={{ maxWidth: 345, border: "2px solid black", transition: "transform 0.3s", '&:hover': { transform: 'scale(1.05)', boxShadow: '0 0 10px rgba(128, 0, 128, 0.5)' }, backgroundColor: "#f0f0f0", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", '& .MuiCardContent-root': { color: 'black', '& h2': { color: 'purple' } } }}>
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : movie.toWatch ? (
            <Avatar sx={{ backgroundColor: 'brown' }}>
              <PlaylistAddCheckIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}