// компонент MovieDetailsPage, сторінка із
//  детальною інформацією про кінофільм.

import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovieId } from "../../services/api";
import { useEffect, useRef, useState } from "react";
import s from './MovieDetailsPage.module.css'
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [moviesId, setMoviesId] = useState(null);
  const location =useLocation()
  const goBack = useRef(location.state ?? '/')


  useEffect(()=>{
    const data = async ()=>{
      await fetchMovieId(movieId)
      setMoviesId(data)
    } 
      data()
  }, [movieId])

  if(!moviesId){
    return <p>Завантаження...</p>
  }
  return <div className={s.nav}>
    <Link to={goBack.current} >Назад</Link>
    <p>hello</p>
{/* <img src={`https://image.tmdb.org/t/p/w500${moviesId.poster_path}`} alt="" /> */}
<nav>
  <Link to={`cast`} >Акторський склад</Link>
  <Link to={`reviews`} >відгуки</Link>
</nav>
    <div>
      <Outlet/>
    </div>
  </div>;
};

export default MovieDetailsPage;
