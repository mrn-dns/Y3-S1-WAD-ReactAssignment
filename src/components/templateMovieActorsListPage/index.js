import React, { useState } from "react";
import Header from "../headerActorList";
import MovieActorList from "../movieActorList";
import Scroll from "../scroll";
import Grid from "@mui/material/Grid";

function MovieActorsListPageTemplate({ actors, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  let displayedMovieActors = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((actor) => {
      return genderFilter === "" || actor.gender === genderFilter;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "gender") setGenderFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Scroll showBelow={250} />
      <Grid item xs={12}>
        <Header title={title} onUserInput={handleChange} genderFilter={genderFilter} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieActorList action={action} actors={displayedMovieActors}></MovieActorList>
      </Grid>
    </Grid>
  );
}
export default MovieActorsListPageTemplate;