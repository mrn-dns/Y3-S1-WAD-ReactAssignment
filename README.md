# Assignment 1 - ReactJS app.

Name: Denis Remus Marincas

## Overview.

This repository contains the 2023, 3rd year, first semester Web App Development assignment. A web application which offers authentication through FIREBASE, uses the TMDB APIs in order to pull in information about the movies and actors displayed on the page. Presents sorting features such as genre sorting, gender sorting and name sorting. Extensive linking between movies and actors, casts and movies.

### Features.

+ __Scroll up button__ was added
+ Actors can now be __sorted by gender__
+ __Signup and login__ provided by __Firebase__ (Fully working)
+ __Pagination__ element introduced (not fully working)
+ __Extensive linking__ between movies and actors
+ Users can now view __similar movies__ of a selected movie
+ Actors have a list of all movies they played in
+ Added many new icons
+ Changed style of movieCards and actorCards
+ Removed movie and actor filtering cards and placed filtering utility in movie/actor header
+ User can view __full cast list__ by selecting a movie
+ __TMDB actor profile__ is now available on actor details page
+ Now playing movies page
+ Popular movies page
+ Actors page
+ Similar movies page
+ Trending actors page
+ Login/Signup page 

## Setup requirements.

Other than firebase, no extra non-standard procedures were required to setup the repository. I cloned the movie-labs repository locally and used npm install.
+ npm install firebase

## API endpoints.

+ List of movies that are currently playing - movies/nowplayingmovies 
+ List of current popular movies - movies/popularmovies
+ List of all time top rated movies - movies/topratedmovies
+ List of similar movies - movies/:id/similar
+ List of actors - actors/
+ Actor details page - actors/:id
+ List of popular actors - actors/popularactors
+ TMDB actor details page - https://www.themoviedb.org/person/${actors.id}
+ TMDB movie cast page - https://www.themoviedb.org/movie/${movie.id}/cast
+ TMDB list of movies in which particular actor played - https://api.themoviedb.org/3/person/${id}/movie_credits

## Routing.

+ /movies/popularmovies - This route showcases a page with popular movies.
+ /movies/:id/similar - This route showcases a page with similar movies as the previous one.
+ /movies/topratedmovies - This route showcases a page with all time top rated movies.
+ /movies/nowplayingmovies - This route showcases a page with movies that are currently playing.
+ actors/ - This route showcases a page with actors.
+ actors/:id - This route showcases a page with the details of a particular actor.
+ actors/popularactors - This route showcases a page with popularactors 
+ Signup page - users/signup
+ Login page - users/login

## Images
![til](src\images\scrollbutton.gif)
>Scroll button


## Independent learning (If relevant).

+ __Scroll up button__ - https://juliapottinger.com/react-gatsby-scroll-to-top/
+ __Firebase__ - https://www.youtube.com/watch?v=Vv_Oi7zPPTw&t=780s