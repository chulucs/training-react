import { useEffect, useState, useRef } from "react";
import PopularMovieItem from "./PopularMovieItem";
import { IMAGE_SIZE } from "./PopularMovieItem";

import classes from "./PopularMovieList.module.css";


const PopularMovieList = (props) => {
  const slider = useRef();
  const [carousel, setCarousel] = useState([]);
  let sliderDirection;
  let scrollValue = 0;
  // const [slider, setSlider] = useState(null);
  const totalMoviesOnScreen = Math.floor(
    window.innerWidth / (+IMAGE_SIZE + 10)
  );
  const scrollWidth = totalMoviesOnScreen * +IMAGE_SIZE;

  useEffect(() => {
    setCarousel(props.popular);
  }, [props.popular]);

  const plusSlide = (n) => {
    sliderDirection = n;
    if (scrollValue < 0) {
      scrollValue = 0;
    } else if (scrollValue >= slider.current.scrollWidth - window.innerWidth) {
      scrollValue = slider.current.scrollWidth - window.innerWidth;
    }

    if (n === -1) {
      scrollValue -= scrollWidth;
      slider.current.scrollTo({
        top: 0,
        left: scrollValue,
        behavior: "smooth",
      });
    }
    if (n === 1) {
      scrollValue += scrollWidth;
      slider.current.scrollTo({
        top: 0,
        left: scrollValue,
        behavior: "smooth",
      });
      console.log(scrollValue, slider.current.scrollWidth);
    }
  };

  return (
    <div className={classes.moveContainer}>
      <div className={classes["movie-list"]} ref={slider}>
        {carousel.map((item) => {
          return (
            <PopularMovieItem
              key={item.id}
              imageUrl={item.backdrop_path}
              description={item.overview}
              title={item.title}
              id={item.id}
              releaseDate={item.release_date}
              imagePoster={item.poster_path}
              slider={sliderDirection}
            />
          );
        })}
      </div>
      <button className={classes.button} onClick={plusSlide.bind(null, -1)}>
        {"<"}
      </button>
      <button className={classes.button} onClick={plusSlide.bind(null, 1)}>
        {">"}
      </button>
    </div>
  );
};

export default PopularMovieList;
