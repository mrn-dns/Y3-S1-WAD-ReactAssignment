import React from "react";
import MovieActorCard from "../movieActorCard";
import Grid from "@mui/material/Grid";

const MovieActorList = ({ actors, action }) => {
  let movieActorCards = actors.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <MovieActorCard key={m.id} actors={m} action={action} />
    </Grid>
  ));
  return movieActorCards;
};

export default MovieActorList;