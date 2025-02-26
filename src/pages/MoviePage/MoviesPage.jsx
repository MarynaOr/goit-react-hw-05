// сторінка пошуку кінофільмів за ключовим словом.
import s from './MoviesPage.module.css'
import { fetchMovie } from '../../services/api.js'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import MovieList from '../../components/MovieList/MovieList.jsx';

const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')

    useEffect(()=>{
      if(!query)return;
      const getData = async() =>{
        try{
          const data = await fetchMovie(query)
          setMovies(data.moviesList)
        } catch(error){
          toast.error('помилка')
        console.error(error);
         }

      }
      getData()
    },[query])


    const handleQuery = (value) =>{
      searchParams.set('query', value)
      setSearchParams(searchParams)

    }

    const filteredQuery = movies.filter(movie=>movie.title.toLowerCase().trim())


  return (
    <>
      <form className={s.form}>
        <input type="search" />
        <button type="button">Пошук</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;