import React from "react";
import { getPopularMovieActors } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieActorsListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const PopularMovieActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popularactors', getPopularMovieActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const popularActors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = popularActors.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Movie Actors"
      actors={popularActors}
      action={(actors) => {
      }}
    />
);
};
export default PopularMovieActorsPage;