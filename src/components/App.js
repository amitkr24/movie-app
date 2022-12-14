import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { addMovies } from '../action';

class App extends React.Component {
  componentDidMount(){
    // make api call to get movies
    //dispatch action
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    this.props.store.dispatch(addMovies(data));
    console.log(store.getState());
  }
  render(){
    const {list} = this.props.store.getState(); 
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
              <div className="tab">Movie</div>
              <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie,index)=>(
              <MovieCard movie={movie} key={`movies-${index}`}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
