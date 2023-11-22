import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getSimilarMovies } from '../api/tmdb-api';
import { useParams } from 'react-router-dom';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';


const SimilarMoviesPage = (props) => {

  const { id } = useParams();
  const { data: similar, error, isLoading, isError } = useQuery( ["similar", { id: id }], getSimilarMovies);

  if (isLoading) return <Spinner/>

  if (isError) return <h1>{error.message}</h1>
  
  const movies = similar.results;  
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  return (
    <>
      {similar ? (
        <>
          <PageTemplate
          title="Similar Movies"
          movies={movies}
              action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
      />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};
export default SimilarMoviesPage;