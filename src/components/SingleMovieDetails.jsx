import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieData } from "../Redux/actions";

export const SingleMovieDetails = () => {
const params = useParams()
const movieId = params.id
const dispatch = useDispatch()
console.log(movieId)

useEffect(() => {
  dispatch(getMovieData())
},[dispatch])
const store = useSelector((store) => store)

console.log(store)

const single = store.data.filter((e) => e.id == movieId)
console.log(single)


    // make a request to get the details
  return (
  <div>
  <h1>Movie detail</h1>
  <div>
  <img src={single[0].image_url}></img>
  <h3>{single[0].movie_name}</h3>
  <p>Rating - {single[0].rating}</p>
  <p>Genre - {single[0].genre}</p>
  </div>
  </div>
  );
};
