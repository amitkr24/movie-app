//action type
export const ADD_MOVIES = 'ADD_MOVIES';

//action creator
export function addMovies (movies,id){
    return {
        type    :ADD_MOVIES,
        movies  
      }
}