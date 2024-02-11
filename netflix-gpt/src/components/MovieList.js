import React, { useRef, useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="relative px-6 pl-12">
      <h1 className="font-bold text-2xl py-6 text-white">{title}</h1>

      <div className="relative">
        <div
          className="flex items-center overflow-x-auto"
       
        >
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default MovieList;
