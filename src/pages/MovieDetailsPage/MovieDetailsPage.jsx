// компонент MovieDetailsPage, сторінка із
//  детальною інформацією про кінофільм.

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieId } from "../../services/api";
import { useEffect, useRef, useState } from "react";
import s from "./MovieDetailsPage.module.css";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  // const navigate = useNavigate();
  const [moviesId, setMoviesId] = useState(null);
  const location = useLocation();
  const goBack = useRef(location?.state ?? "/");
  // const poster = `https://api.themoviedb.org/3/movie/${movieId}/images`;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieId(movieId);
        // console.log(data);
        setMoviesId(data);
      } catch (error) {
        console.error("MovieDateilsPage", error);
      }
    };
    getData();
  }, [movieId]);

  // <img
  // src={
  //   moviesId.poster_path
  //     ? `https://image.tmdb.org/t/p/w500/${moviesId.poster_path}`
  //     : defaultImg
  // }
  // console.log("Movie data:", moviesId);
  // console.log("Poster path:", moviesId?.poster_path);
  // console.log(movieId);
  if (!moviesId) {
    return <p>Завантаження...</p>;
  }
  return (
    <div className={s.nav}>
      <Link className={s.btn} to={goBack.current}>
        Назад
      </Link>

      <div className={s.con}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${moviesId.poster_path}`}
          alt="poster"
          width="260"
          height="390"
        />
        <div>
          <h2 className={s.title}> {moviesId.original_title} </h2>
          <p className={s.text}>User Score: {Math.round(moviesId.vote_average * 10)}%</p>
          <h3 className={s.title}>Overiew</h3>
          <p className={s.text}> {moviesId.overview} </p>
          <h3 className={s.title}>Genres</h3>
          <p className={s.text}> {moviesId.genres.map(genre=>genre.name).join(', ')} </p>
        </div>
      </div>
      {/* <img src={poster} alt="poster" /> */}
      <nav className={s.navcon}>
        <Link className={s.navlink} to={`cast`}>Акторський склад</Link>
        <Link className={s.navlink} to={`reviews`}>відгуки</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
