import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByGenre, getMovieData } from "../Redux/actions";
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
  const filter = useSelector((state) => state.filterData)
 const [select, setSelect] = useState("")
//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
    setSelect(e.target.value)
    dispatch(filterByGenre(select))
  }
  
// const filter = state.data.filter((gen) => gen.genre.includes(select))
// console.log(filter)
const handleClick = (id) => {
  navigate(`/movies/${id}`)
}
  return (
    <>
      <h2>Movies</h2>
      <select onChange={(e) => handleFilter(e)} value={select}>
        {genres.map((ele) => {
          return <option>{ele}</option>
        })}
      </select>
      <div className = "movies-list">
       {state.isLoading ? <h1>Loading..</h1> : filter.map((e) => {
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
