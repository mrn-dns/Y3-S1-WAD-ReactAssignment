import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getNowPlayingMovies } from "../api/tmdb-api";
import AddToWatch from '../components/cardIcons/addToWatch'
import Spinner from '../components/spinner';
import { useQuery } from "react-query";

const NowPlayingMoviePage = (props) => {
  const { data, error, isLoading, isError } = useQuery('nowplaying', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 

  const nowPlayingMovies = data.results;

  return (
    <PageTemplate
      title='Now Playing'
      movies={nowPlayingMovies}
      action={(movie) => {
        return <AddToWatch movie={movie} />
      }}
    />
  );
};
export default NowPlayingMoviePage;