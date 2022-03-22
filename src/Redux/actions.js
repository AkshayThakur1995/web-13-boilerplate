import axios from "axios";
import { GET_MOVIE_SUCCESS,GET_MOVIES_REQ, GET_MOVIES_FAIL, GET_FILTER_MOVIE } from "./actionTypes";

const getMovieReq = () => ({
    type:GET_MOVIES_REQ
})
// thunk call to fetch movie list
export const getMovieData = () => {
    return async(dispath, getState) => {
        dispath(getMovieReq())
        try {
            const response = await axios.get("https://movie-fake-server.herokuapp.com/data")
            dispath({type:GET_MOVIE_SUCCESS, payload: response.data})
        } catch (error) {
            dispath({type:GET_MOVIES_FAIL, error})
        }
    }
}

// action object for filter  feature

export const filterByGenre = (movie) => {
    return async(dispath, getState) => {
        dispath(getMovieReq())
        try {
            const response = await axios.get("https://movie-fake-server.herokuapp.com/data")
            
            const filter = response.data.filter((gen) => gen.genre.includes(movie))
         (filter)
            dispath({type:GET_FILTER_MOVIE, payload: filter})
        } catch (error) {
            dispath({type:GET_MOVIES_FAIL, error})
        }
    }
};
