import React from "react";

const SingleCard = ({ movie, handleWatchTime }) => {
  //   console.log(movie);
  return (
    <div>
      <div className="movie-card card m-auto text-center w-100 col-md-6">
        <div className="movie-poster w-50  m-auto">
          <img className="w-75" src={movie.poster} alt="" />
        </div>
        <h3>{movie.movieName}</h3>
        <p>{movie.description}</p>
        <div className="timeAndRating d-flex justify-content-around">
          <p>Watch Time: {movie.watchTime}</p>
          <p>Rating: {movie.imdbRating} </p>
        </div>
        <button
          onClick={() => handleWatchTime(movie.watchTime)}
          className="btn btn-info w-75 m-auto"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
