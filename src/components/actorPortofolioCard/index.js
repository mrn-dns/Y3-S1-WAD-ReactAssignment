import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import img from '../../images/film-poster-placeholder.png';
import { CardActions } from "@mui/material";
import Button from '@mui/material/Button';

export default function ActorPortofolioCard({ movie }) {

      return (
        <Card sx={{ maxWidth: 345, border: "2px solid black", transition: "transform 0.3s", '&:hover': { transform: 'scale(1.05)', boxShadow: '0 0 10px rgba(128, 0, 128, 0.5)' }, backgroundColor: "#f0f0f0", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", '& .MuiCardContent-root': { color: 'black', '& h2': { color: 'purple' } } }}>
          <CardMedia
            sx={{ height: 500 }}
            image={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : img
            }
          />
          <CardContent>
            <Typography variant="h5" component="p">
              {movie.title}
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}> 
                <Typography variant="body2" color="text.secondary" component="div">
                  Release Date: {movie.release_date}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}>
              <Button variant="outlined" size="medium" color="primary">
                More Info ...
              </Button>
            </Link>
          </CardActions>
        </Card>
      );
    }