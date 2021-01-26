import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'


export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <Link className='movie-link' key={movie.id} to={`movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore} = props.movie;

  return (
   <MovieCard
   title={title}
   director={director}
   metascore={metascore}
   />
  );
}
