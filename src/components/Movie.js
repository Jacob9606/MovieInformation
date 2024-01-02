import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres, rating }) {
  // 별의 개수 계산
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 >= 1 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="movie-card">
      <img src={coverImg} alt={title} />
      <h2 className="movie-title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul className="movie-genres">
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <div className="movie-rating">
        {"★".repeat(fullStars)}
        {halfStar ? "⭐" : ""}
        {"☆".repeat(emptyStars)}
        <span className="movie-rating-number"> {rating.toFixed(1)}</span>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired, // 평점 propType 추가
};

export default Movie;
