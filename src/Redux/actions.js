import axios from "axios";
import { GET_MOVIE_SUCCESS,GET_MOVIES_REQ, GET_MOVIES_FAIL } from "./actionTypes";

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

const filterByGenre = () => ({});
