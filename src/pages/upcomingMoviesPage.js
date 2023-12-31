import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatch from '../components/cardIcons/addToWatch'
import Spinner from '../components/spinner';
import { useQuery } from "react-query";

const UpcomingMoviePage = (props) => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 

  const upcomingMovies = data.results;

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToWatch movie={movie} />
      }}
    //   selectFavorite={addToFavorites}
    />
  );
};
export default UpcomingMoviePage;