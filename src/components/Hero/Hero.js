import { useState, useEffect } from "react";
import classes from "./Hero.module.css";
import { BASE_URL } from "../Popular/PopularMovieItem";

let ready = false;

const Hero = (props) => {
  // console.log(props);
  const [hero, setHero] = useState({});

  const buttonHandler = () => {
    alert("O link para assistir/mais info ainda nao existe!");
  };

  useEffect(() => {
    if (ready) {
      const getRandomValue = () => {
        const propsLength = props.listShow.length;
        const randomIndex = Math.floor(Math.random() * propsLength);
        return randomIndex;
      };

      const index = getRandomValue();
      const heroObj = {
        title: props.listShow[index].title,
        description: props.listShow[index].overview,
        backdropImage: props.listShow[index].backdrop_path,
        posterImage: props.listShow[index].poster_path,
      };
      setHero(heroObj);
    }

    return () => {
      ready = true;
    };
  }, [props.listShow]);

  return (
    <div className={classes["hero-container"]}>
      <img src={`${BASE_URL}/w1280${hero.backdropImage}`} alt="" />
      <div className={classes["hero-title"]}>{hero.title}</div>
      <div className={classes["hero-description"]}>{hero.description}</div>
      <div className={classes["hero-btn"]}>
        <button className={classes.button} onClick={buttonHandler}>
          Assistir
        </button>
        <button className={classes.button} onClick={buttonHandler} disabled>
          Mais informações
        </button>
      </div>
    </div>
  );
};

export default Hero;
