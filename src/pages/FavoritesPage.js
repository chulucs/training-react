import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoriteActions } from "../store/favoriteSlice";

import { BASE_URL } from "../components/Popular/PopularMovieItem";
import { IMAGE_SIZE } from "../components/Popular/PopularMovieItem";
import classes from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favoriteShow = useSelector((state) => state.fav.favorites);
  let message = "";
  if (favoriteShow.length > 0) {
    message = "clique no filme para excluir da lista de favoritos!";
  } else {
    message = "Você nao possui filmes em sua lista de favoritos!";
  }
  const dispatch = useDispatch();
  const deleteFavoriteHandler = (title) => {
    dispatch(favoriteActions.removeElement(title));
  };

  return (
    <Fragment>
      <div className={classes['fav-content']}>
        <h2 className={classes.h2}>Filmes favoritos!</h2>
        <p className={classes.p}>{message}</p>
        <ul className={classes.ul}>
          {favoriteShow.map((item) => (
            <li
              key={item.title}
              onClick={deleteFavoriteHandler.bind(null, item.title)}
            >
              <img
                src={BASE_URL + "w" + IMAGE_SIZE + item.image}
                alt={item.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default FavoritesPage;
