import s from "./HomePage.module.css";
import { fetchUrl } from "../../services/api";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([])

  return (
    <div className={s.pra}>
      <h1 className={s.title}>Treding Today</h1>
      <MovieList/>
    </div>
  );
};

export default HomePage;
