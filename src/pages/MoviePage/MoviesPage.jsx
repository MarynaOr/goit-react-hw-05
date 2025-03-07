import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovie } from "../../services/api.js";
import { Outlet, useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList.jsx";
import toast, { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [searcsMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const searchData = async () => {
      try {
        const response = await fetchMovie(query);
        setSearchMovies(response);
      } catch (error) {
        toast.error("Виникла помилка");
        console.error("error moviePage", error);
      }
    };
    searchData("");
  }, [query]);

  const handleChangeQuery = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <Toaster position="top-left" reverseOrder={false} />
      <MovieList movies={searcsMovies} />
      <Outlet />
    </>
  );
};

export default MoviesPage;
