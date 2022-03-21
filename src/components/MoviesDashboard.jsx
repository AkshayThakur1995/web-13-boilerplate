import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieData } from "../Redux/actions";
import { useNavigate } from "react-router";
const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];


export const MoviesDashboard = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  // to get all movies list on component mounts
  useEffect(() => {
    //   dispatch an action to the store 
    dispatch(getMovieData())
  }, [dispatch]);
  const state = useSelector((state) => state)
  console.log(state)

//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
}

const handleClick = (id) => {
  navigate(`/movies/${id}`)
}
  return (
    <>
      <h2>Movies</h2>
      <select  onChange={handleFilter}>
        {/* map through the filter  */}
      </select>
      <div className = "movies-list">
       {state.isLoading ? <h1>Loading..</h1> : state.data.map((e) => {
         return (
           <div className="card" onClick={() => handleClick(e.id)} >
            <img src={e.image_url}></img>
           <h3>Tittle - {e.movie_name}</h3>
           <p>Ratting - {e.rating}</p>
           <p>Genre - {e.genre}</p>
           </div>
         )
       })}
      </div>
    </>
  );
};
