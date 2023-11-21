import React from "react";
import { getMovieActors } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieActorsListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const MovieActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('actors', getMovieActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = actors.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Movie Actors"
      actors={actors}
      action={(actors) => {
      }}
    />
);
};
export default MovieActorsPage;