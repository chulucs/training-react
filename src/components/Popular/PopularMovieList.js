import { useEffect, useState, useCallback } from "react";
import PopularMovieItem from "./PopularMovieItem";
import { IMAGE_SIZE } from "./PopularMovieItem";

import classes from "./PopularMovieList.module.css";

let ready = false;
let indexCount = 1;

const PopularMovieList = (props) => {
  const [carousel, setCarousel] = useState([]);
  const [slider, setSlider] = useState(null);
  const totalMoviesOnScreen = Math.floor(window.innerWidth / (+IMAGE_SIZE +10));
  const totalIndex = Math.floor(props.popular.length / totalMoviesOnScreen);

  const initialValue = useCallback(
    (popularArray) => {
      const carouselHandler = [];
      for (let i = 0; i < totalMoviesOnScreen; i++) {
        carouselHandler.push(popularArray[i]);
      }

      setCarousel(carouselHandler);
    },
    [totalMoviesOnScreen]
  );

  useEffect(() => {
    //   const timer = setTimeout(() => {
    //       initialValue(props.popular);
    //   }, 300)
    if (ready) {
      initialValue(props.popular);
    }

    return () => {
      ready = true;
      //   clearTimeout(timer);
    };
  }, [props.popular, initialValue]);

  const plusSlide = (n) => {
    const arrayHelper = [];
    indexCount += n;
    if (indexCount > totalIndex) {
      indexCount = 1;
    } else if (indexCount < 1) {
      indexCount = totalIndex;
    }
    for (let i = 0; i < totalMoviesOnScreen; i++) {
      arrayHelper.push(props.popular[(indexCount - 1) * totalMoviesOnScreen + i]);
    }
    setCarousel(arrayHelper);
    setSlider(n);
  };
  
  return (
    <div className={classes.moveContainer}>
      <ul className={classes["movie-list"]}>
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
              slider={slider}

            />
          );
        })}
      </ul>
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
