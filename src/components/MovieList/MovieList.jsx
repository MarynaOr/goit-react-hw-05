// Для відображення списку фільмів створіть
//  компонент MovieList. Використовуйте його
//  на сторінках HomePage і MoviesPage.

import { Link, useLocation } from "react-router-dom";
import s from './MovieList.module.css'
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul className={s.item}>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link className={s.list} to={`/movies/${movie.id}`} state={location}>
                            {movie.title}

              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
