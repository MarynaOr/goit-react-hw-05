import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcReviews } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetcReviews(movieId);
        console.log(data);
        setReview(data.results || []);
      } catch (error) {
        console.error("MovieReviews", error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul className={s.item}>
        {review.map((item) => {
          return (
            <li key={item.id} className={s.list}>
              <h3> {item.author} </h3>
              <p> {item.content} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
