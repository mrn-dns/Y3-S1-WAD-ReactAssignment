import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import FormControl from "@mui/material/FormControl";
import Spinner from '../spinner'

const Header = ( props ) => {
  
  const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  const title = props.title
  const navigate = useNavigate();

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center", // Center the child elements vertically
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(+1)}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
      <br />
      <TextField
      sx={{...formControl}}
      id="filled-search"
      label="Search field"
      type="search"
      variant="filled"
      value={props.titleFilter}
      onChange={handleTextChange}
    />
    <FormControl sx={{...formControl}}>
      <InputLabel id="genre-label">Genre</InputLabel>
      <Select
        labelId="genre-label"
        id="genre-select"
        defaultValue=""
        value={props.genreFilter}
        onChange={handleGenreChange}
      >
        {genres.map((genre) => {
          return (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
    </Paper>
  );
};

export default Header;