import { GET_FILTER_MOVIE, GET_MOVIES_FAIL, GET_MOVIES_REQ, GET_MOVIE_SUCCESS } from "./actionTypes"


const initState = {
    data:[],
    filterData:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state=initState, action)=>{
    // add the switch statement for different actions
    switch(action.type){
        case GET_MOVIES_REQ:
            return {
                ...state,
                isLoading:true,
                isError:null
            }
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case GET_MOVIES_FAIL:
            return {
                ...state,
                isLoading:false,
                error:action.error
            }
        case GET_FILTER_MOVIE:
            return {
                ...state,
                isLoading:false,
                filterData:action.payload
            }
        default:
            return state
    }
}