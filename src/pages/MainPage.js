import { Fragment } from "react";
import PopularMovieList from "../components/Popular/PopularMovieList";
import classes from "./MainPage.module.css";

const MainPage = (props) => {
  return (
    <Fragment>
      <p className={classes.p}>Popzinho - FETNLIX</p>
      <PopularMovieList popular={props.popular} />
      <p className={classes.p}>Sendo visto agora - FETNLIX</p>
      <PopularMovieList popular={props.nowPlaying} />
      <p className={classes.p}>TOP-RATED - FETNLIX</p>
      <PopularMovieList popular={props.topRated} />
      <p className={classes.p}>Saindo do forno - FETNLIX!</p>
      <PopularMovieList popular={props.upcoming} />
      <p className={classes.p}>"Modinha" - FETNLIX</p>
      <PopularMovieList popular={props.trending} />
    </Fragment>
  );
};

export default MainPage;
