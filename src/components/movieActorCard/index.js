import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

export default function MovieCard({actors,action}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          actors.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : actors.toWatch ? (
            <Avatar sx={{ backgroundColor: 'brown' }}>
              <PlaylistAddCheckIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actors.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actors.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        {action(actors)}
        <Link to={`/actors/${actors.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            About ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}