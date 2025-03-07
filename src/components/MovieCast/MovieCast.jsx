import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../../services/api";
import s from './MovieCast.module.css'

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    // console.log("useEffect запустився, cast:", movieId);
    const getData = async () => {
      try {
        const data = await fetchCast(movieId);
        //  console.log("Fetched Cast Data:", data);
        setCast(data.cast || []);

        // if (data.cast && Array.isArray(data.cast)) {
        //   setMoviesCast(data.cast);
        // }
      } catch (error) {
        console.error("MovieDateilsPage", error);
      }
    };

    getData();
  }, [movieId]);

  // if (!movieId) {
  //   return <p>Завантаження...</p>;
  // }

  return (
    <div>
      <h2 className={s.title}>Cast</h2>
      <ul className={s.item}>
        {
          cast.map((item)=>{
           return <li key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt="photo" />
              <p> {item.original_name} </p>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default MovieCast;
