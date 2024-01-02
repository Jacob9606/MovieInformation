import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Detail.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      setMovie(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  // 별 랭킹을 계산하는 함수
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar ? "⭐" : ""}
        {"☆".repeat(emptyStars)}
        <span className="movie-rating-number"> {rating.toFixed(1)}</span>
      </>
    );
  };

  if (loading) {
    return <h1 className="loading-container">Loading...</h1>;
  }

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{movie.title}</h1>
      <img
        className="movie-image"
        src={movie.large_cover_image}
        alt={movie.title}
      />
      <div className="movie-rating">{renderRating(movie.rating)}</div>
      <p className="movie-description">{movie.description_full}</p>
    </div>
  );
}

export default Detail;
