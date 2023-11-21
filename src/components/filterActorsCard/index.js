import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import img from '../../images/sly.jpg'
import { getMovieActors } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

const FilterActorsCard = (props) => {

  const { data, error, isLoading, isError } = useQuery("actors", getMovieActors);
  const { titleFilter, onUserInput } = props;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data?.actors ? [{ id: "0", name: "All" }, ...data.actors] : [];
  console.log(actors)

  const handleTextChange = (e) => {
    const { value } = e.target;
    onUserInput("name", value);
  };

  return (
    <Card
      style={{ maxWidth: 345, backgroundColor: "rgb(204, 204, 0)" }}
      variant="outlined"
    >
      <CardContent>
        {/* SEARCH BY NAME */}
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the actors.
        </Typography>
        <TextField
          style={{ ...formControl }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={titleFilter}
          onChange={handleTextChange}
        />
      </CardContent>
      <CardMedia sx={{ height: 300 }} image={img} title="Filter" />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the actors.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FilterActorsCard;