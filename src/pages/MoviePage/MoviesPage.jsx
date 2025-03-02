import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
// import axios from "axios";
import {fetchMovie} from '../../services/api.js'
import { Outlet, useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList.jsx";
import toast, { Toaster } from "react-hot-toast";

// сторінка пошуку кінофільмів за ключовим словом.
const MoviesPage = () => {
  const [searcsMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

// 

  useEffect(() => {
if(!query)return

    const searchData = async () =>{
      try{
        const response = await fetchMovie(query)
        setSearchMovies(response)
        
      } catch(error){
        toast.error('Виникла помилка')
        console.error('error moviePage', error)
        
      }
    }
    searchData();
  }, [query]);


const handleChangeQuery = (value) => {
  setSearchParams({query:value})
  setQuery(value)
}
//   const handleChangeQuery = (value) => {
// searchParams.get('query',value)
// setSearchParams(searchParams)
//   };
  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <Toaster
  position="top-left"
  reverseOrder={false}
/>
<MovieList movies={searcsMovies}/>
<Outlet/>
    </>
  );
};

export default MoviesPage;

// import s from "./MoviesPage.module.css";
// import { fetchMovie } from "../../services/api.js";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import MovieList from "../../components/MovieList/MovieList.jsx";

// const MoviesPage = ({  }) => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [query, setQuery] = useState(searchParams.get("query") || "");
//   // const [filteredMovies, SetFilteredMovies] = useState([]);

//   useEffect(() => {
//     if (!query) return;
//     const getData = async () => {
//       try {
//         const data = await fetchMovie(query);
//         setMovies(data.moviesList);
//       } catch (error) {
//         toast.error("помилка");
//         console.error(error);
//       }
//     };
//     getData();
//   }, [query]);

//   const handleQuery = (value) => {
//     searchParams.set("query", value);
//     setSearchParams(searchParams);

//      const filteredQuery = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(value.toLowerCase())
//   );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//   };

//   // (e)=>setMovies(e.target.value)
//   return (
//     <>
//       <form onSubmit={handleSubmit} className={s.form}>
//         <input type="search" onChange={(e)=>handleQuery(e.target.value)} />
//         <button type="submit">Пошук</button>
//       </form>
//       <MovieList movies={movies} />
//     </>
//   );
// };

// export default MoviesPage;
