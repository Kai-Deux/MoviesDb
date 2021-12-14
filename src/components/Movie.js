import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (Avg) => {
    if (Avg === 0) {
        return 'grey'
    } else if (Avg < 5){
        return 'red'
    } else if (Avg >= 5) {
        return 'yellow'
    } else if (Avg < 7) {
        return 'yellow'
    } else {
        return 'green'
    }
}

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <>
    <div className="movie">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        
        <div className="movie-over">
            <h2>Overview:</h2>
            <p>{overview}</p>
            </div>
    </div>
    
    </>
);

export default Movie;
