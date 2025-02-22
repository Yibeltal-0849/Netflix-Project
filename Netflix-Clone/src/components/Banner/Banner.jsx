import React, { useState, useEffect } from "react";
import axios from "../../utils/Axios";
import Request from "../../utils/Requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(Request.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "http://image.tmdb.org/t/p/original${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="Banner_contents">
        <h1 className="Banner_title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>

        <div className="Banner_buttons">
          <button className="Banner_button play">Play</button>
          <button className="Banner_button">My List</button>
        </div>
        <h1 className="Banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="Banner_fadebottom" />
    </div>
  );
};

export default Banner;
