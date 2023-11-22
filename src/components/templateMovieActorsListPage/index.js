import React, { useState } from "react";
import Header from "../headerActorList";
import FilterActorsCard from "../filterActorsCard";
import MovieActorList from "../movieActorList";
import Grid from "@mui/material/Grid";

function MovieActorsListPageTemplate({ actors, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  let displayedMovieActors = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((actor) => {
      return genderFilter ? actor.gender === genderFilter : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "gender") setGenderFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} onUserInput={handleChange} />
      </Grid>
      <Grid item container spacing={5}>
        {/* <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterActorsCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
          />
        </Grid> */}
        <MovieActorList action={action} actors={displayedMovieActors}></MovieActorList>
      </Grid>
    </Grid>
  );
}
export default MovieActorsListPageTemplate;