import { ADD_MOVIES } from "../action";
const intialMoviesStates = {
    list        :[],
    favourites  :[]
}
export default function movies(state=[],action){
    if(action.type ==ADD_MOVIES){
        return {
            ...state,
            list: action.movies}
    }
        return state;
}
