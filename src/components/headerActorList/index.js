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
import FormControl from "@mui/material/FormControl";

const getGenderLabel = (gender) => {
  switch (gender) {
    case 1:
      return "Female";
    case 2:
      return "Male";
    case 3:
      return "Non-binary";
    default:
      return "Unknown";
  }
};

const Header = (props) => {
  // const genderLabel = getGenderLabel(props.gender);
  const formControl = {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  };

  const title = props.title;
  const navigate = useNavigate();

  // You can replace the genre-related code with actor-specific data fetching if needed

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e, actors) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenderChange = (e) => {
    props.onUserInput("gender", e.target.value);
  };

  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
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
        sx={{ ...formControl }}
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={props.titleFilter} // Adjust the prop name
        onChange={handleTextChange}
      />
      <FormControl sx={{ ...formControl }}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender-select"
          defaultValue=""
          value={props.genderFilter} // Adjust the prop name
          onChange={handleGenderChange}
        >
          <MenuItem value={1}>Female</MenuItem>
          <MenuItem value={2}>Male</MenuItem>
          <MenuItem value={3}>Non-binary</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default Header;
