import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovies } from "../api/tmdb-api";
import AddToWatch from '../components/cardIcons/addToWatch'
import Spinner from '../components/spinner';
import { useQuery } from "react-query";

const TopRatedMoviePage = (props) => {
  const { data, error, isLoading, isError } = useQuery('toprated', getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 

  const topRatedMovies = data.results;

  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={topRatedMovies}
      action={(movie) => {
        return <AddToWatch movie={movie} />
      }}
    />
  );
};
export default TopRatedMoviePage;