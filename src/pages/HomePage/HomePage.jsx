import s from "./HomePage.module.css";
import { fetchUrl } from "../../services/api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
    const data = async() =>{
      const movie = await fetchUrl()
      setMovies(movie)
    }
    data()
  },[])

  return (
    <div className={s.pra}>
      <h1 className={s.title}>Treding Today</h1>
      <MovieList movies={movies}/>
    </div>
  );
};

export default HomePage;
