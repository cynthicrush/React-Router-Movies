import React from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) { 
  const { url } = useRouteMatch();
  console.log('url', url)
  return (
      <div className="movie-list">
        {props.movies.map(movie => (
          <Link to={`${url}/${movie.id}`} >
            <MovieDetails key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    )
}

function MovieDetails(props) {

  // const history = useHistory();
  
 
  // const routeToDetails = () => {
  //   history.push(`/movies/${id}`)
  // }

  const { title, director, metascore, id } = props.movie;
  return (
    
      <div className="movie-card" >
      {/* onClick={routeToDetails}> */}
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>

  );
}
